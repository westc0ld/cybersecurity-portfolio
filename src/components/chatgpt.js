import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const ChatGPT = () => {
    const [inputValue, setInputValue] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [responseMessage, setResponseMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const chatHistoryRef = useRef(null);
    const [typingText, setTypingText] = useState('');
    const typingIndexRef = useRef(0);
    const typingIntervalRef = useRef(null);
    
    const fullText = '서찬에 대해 궁금한 것을 입력하세요';

    const scrollToBottom = () => {
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatHistory]);

    // 타이핑 효과 - 10초마다 반복
    useEffect(() => {
        const startTyping = () => {
            typingIndexRef.current = 0;
            setTypingText('');
            
            if (typingIntervalRef.current) {
                clearInterval(typingIntervalRef.current);
            }
            
            typingIntervalRef.current = setInterval(() => {
                if (typingIndexRef.current < fullText.length) {
                    setTypingText(fullText.substring(0, typingIndexRef.current + 1));
                    typingIndexRef.current += 1;
                } else {
                    clearInterval(typingIntervalRef.current);
                    // 타이핑 완료 후 10초 대기 후 다시 시작
                    setTimeout(() => {
                        startTyping();
                    }, 10000);
                }
            }, 100); // 각 글자마다 100ms 간격
        };

        // 채팅 히스토리가 비어있을 때만 타이핑 효과 시작
        if (chatHistory.length === 0) {
            startTyping();
        }

        return () => {
            if (typingIntervalRef.current) {
                clearInterval(typingIntervalRef.current);
            }
        };
    }, [chatHistory.length, fullText]);

    const sendMessage = async () => {
        // 빈 입력값 체크
        if (!inputValue.trim()) {
            return;
        }

        setIsLoading(true);
        const userMessage = inputValue;
        setInputValue(''); // 입력값을 먼저 초기화
        
        // 사용자 메시지를 먼저 채팅 히스토리에 추가
        setChatHistory(prevChat => [...prevChat, { text: userMessage, sender: 'user' }]);
        
        try {
            // API URL을 환경 변수로 관리 (로컬 개발: http://localhost:5000, 프로덕션: https://api.westcold0035.com)
            const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
            const response = await axios.post(`${API_URL}/sendMessage`, {
                user_input: userMessage
            });
            
            const botResponse = response.data.description || '응답을 받을 수 없습니다.';
            setResponseMessage(botResponse);
            
            // 봇 응답을 채팅 히스토리에 추가
            setChatHistory(prevChat => [...prevChat, { text: botResponse, sender: 'bot' }]);
            console.log('Responsemessage:', botResponse);
        } catch (error) {
            console.error('Error sending message:', error);
            console.error('Error details:', {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status,
                url: error.config?.url
            });
            
            let errorMessage = '서버와 통신 중 오류가 발생했습니다.';
            
            if (error.code === 'ECONNREFUSED' || error.message?.includes('Network Error')) {
                errorMessage = '백엔드 서버에 연결할 수 없습니다. 서버가 실행 중인지 확인해주세요.';
            } else if (error.response?.data?.description) {
                errorMessage = error.response.data.description;
            } else if (error.response?.data?.error) {
                errorMessage = error.response.data.error;
            } else if (error.message) {
                errorMessage = error.message;
            }
            
            // 에러 메시지를 채팅 히스토리에 추가
            setChatHistory(prevChat => [...prevChat, { 
                text: `[ERROR] ${errorMessage}`, 
                sender: 'bot' 
            }]);
        } finally {
            setIsTyping(false);
            setIsLoading(false);
            scrollToBottom();
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        setIsTyping(true);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <>
            <div className="chat">
                <div className="monitor-wrapper">
                    <div className="chat-container">
                        <div className="monitor-bezel-top"></div>
                        <div className="monitor-bezel-bottom"></div>
                        <div className="monitor-brand">SECURITY_TERMINAL</div>
                        <div className="monitor-led"></div>
                    {isLoading && (
                            <div className="loading-overlay">
                            <div className='ment'>&gt; SYSTEM ANALYZING... PLEASE WAIT</div>
                        </div>
                    )}
                    <div className="chat-history" ref={chatHistoryRef}>
                        {chatHistory.map((message, index) => {
                            const isError = message.text?.startsWith('[ERROR]');
                            const isFalse = message.text?.toLowerCase().includes('false') && message.sender === 'bot';
                            return (
                                <div key={index} className={`message ${message.sender} ${isError || isFalse ? 'error-message' : ''}`}>
                                    {message.text}
                                </div>
                            );
                        })}
                        {(chatHistory.length === 0) && (
                            <div className="messagebot">
                                <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                                    <div style={{ marginTop: '20px', color: '#ffffff', minHeight: '24px', width: '100%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                            <span style={{ marginRight: '5px', flexShrink: 0, color: '#ffffff' }}>&gt;</span>
                                            <span>
                                                {typingText}
                                                <span className="typing-cursor">|</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '10px', fontSize: '12px', opacity: 0.6, color: '#ffffff', position: 'relative', width: '100%', textAlign: 'center' }}>Type your question and press ENTER...</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder="> 명령어를 입력하세요..."
                        />
                        <button onClick={sendMessage}>EXECUTE</button>
                    </div>
                    </div>
                    <div className="monitor-stand">
                        <div className="monitor-stand-base"></div>
                    </div>
                </div>
                <div className="warning">
                    * WARNING: 최대 10개의 질문만 허용됩니다<br />
                    * SECURITY ALERT: 관련 없는 질문에 대한 false 응답이 3회 발생 시 세션이 종료됩니다
                </div>
            </div>
        </>
    );
};

export default ChatGPT;

