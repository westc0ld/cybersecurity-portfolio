import React, { useEffect, useRef } from 'react';

const TerminalBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const commands = [
            '> nmap -sS 192.168.1.0/24',
            '> hydra -l admin -P passwords.txt ssh://target',
            '> sqlmap -u "http://target.com/page?id=1" --dbs',
            '> wireshark -i eth0',
            '> aircrack-ng -w wordlist.txt capture.cap',
            '> metasploit console',
            '> john --wordlist=rockyou.txt hash.txt',
            '> burpsuite --proxy',
            '> nikto -h target.com',
            '> dirb http://target.com /usr/share/wordlists/dirb/common.txt',
            '> hashcat -m 0 hash.txt wordlist.txt',
            '> ettercap -T -M arp:remote /192.168.1.1/ /192.168.1.100/',
            '> tcpdump -i eth0 -w capture.pcap',
            '> enum4linux -a target',
            '> gobuster dir -u http://target.com -w wordlist.txt',
        ];

        let animationId;
        const lines = [];
        const fontSize = 14;
        const lineHeight = fontSize * 1.5;
        const maxLines = Math.floor(window.innerHeight / lineHeight);

        // 초기 라인 생성 - 전체 화면에 흩뿌리기
        const columns = Math.floor(window.innerWidth / 300); // 화면 너비에 따라 컬럼 수 결정
        for (let col = 0; col < columns; col++) {
            for (let i = 0; i < maxLines; i++) {
                lines.push({
                    text: commands[Math.floor(Math.random() * commands.length)],
                    x: 20 + (col * 300) + Math.random() * 50,
                    y: (i + 1) * lineHeight + Math.random() * 100,
                    opacity: Math.random() * 0.15 + 0.05, // 매우 흐릿하게
                    speed: Math.random() * 0.3 + 0.2,
                });
            }
        }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const animate = () => {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            lines.forEach((line, index) => {
                // 텍스트 그리기 - 매우 흐릿하게
                ctx.font = `${fontSize}px 'Courier New', monospace`;
                ctx.fillStyle = `rgba(0, 255, 65, ${line.opacity})`; // 형광 초록색으로 변경
                ctx.textAlign = 'left';
                ctx.fillText(line.text, line.x, line.y);

                // 커서 깜빡임 효과 (매우 흐릿하게)
                if (Math.floor(Date.now() / 500) % 2 === 0) {
                    const textWidth = ctx.measureText(line.text).width;
                    ctx.fillStyle = `rgba(0, 255, 65, ${line.opacity * 0.5})`;
                    ctx.fillRect(line.x + textWidth, line.y - fontSize, 2, fontSize);
                }

                // 라인 이동
                line.y += line.speed;

                // 화면 밖으로 나가면 다시 위로
                if (line.y > canvas.height) {
                    line.y = -lineHeight - Math.random() * 200;
                    line.text = commands[Math.floor(Math.random() * commands.length)];
                    line.opacity = Math.random() * 0.15 + 0.05; // 매우 흐릿하게 유지
                }
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="terminal-background"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
};

export default TerminalBackground;

