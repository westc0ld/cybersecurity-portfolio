import React, { useMemo } from 'react';

const Dashboard = () => {
    // 고정된 네트워크 노드 위치
    const networkNodes = useMemo(() => [
        {x: 100, y: 100}, {x: 250, y: 150}, {x: 400, y: 100},
        {x: 550, y: 150}, {x: 700, y: 100}, {x: 850, y: 150},
        {x: 150, y: 300}, {x: 300, y: 350}, {x: 450, y: 300},
        {x: 600, y: 350}, {x: 750, y: 300}, {x: 900, y: 350},
        {x: 200, y: 500}, {x: 350, y: 550}, {x: 500, y: 500},
        {x: 650, y: 550}, {x: 800, y: 500}
    ], []);

    return (
        <div className="dashboard-container">
            {/* 네트워크 그래프 배경 */}
            <div className="network-background">
                <svg className="network-graph" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
                    {networkNodes.map((node, i) => (
                        <g key={i}>
                            <circle 
                                cx={node.x} 
                                cy={node.y} 
                                r="4" 
                                fill="#00ff41" 
                                opacity="0.7"
                                className="network-node"
                            />
                            {/* 각 노드에서 다음 노드로 연결 */}
                            {i < networkNodes.length - 1 && (i % 2 === 0 || i % 3 === 0) && (
                                <line 
                                    x1={node.x} 
                                    y1={node.y} 
                                    x2={networkNodes[i + 1].x} 
                                    y2={networkNodes[i + 1].y} 
                                    stroke="#00d4ff" 
                                    strokeWidth="0.8" 
                                    opacity="0.4"
                                    className="network-line"
                                />
                            )}
                            {/* 추가 연결선 (보라색) */}
                            {i % 4 === 0 && i + 4 < networkNodes.length && (
                                <line 
                                    x1={node.x} 
                                    y1={node.y} 
                                    x2={networkNodes[i + 4].x} 
                                    y2={networkNodes[i + 4].y} 
                                    stroke="#8a2be2" 
                                    strokeWidth="0.6" 
                                    opacity="0.3"
                                    className="network-line"
                                />
                            )}
                        </g>
                    ))}
                </svg>
            </div>

            {/* Welcome 메시지 */}
            <div className="dashboard-welcome">
                <div className="welcome-text">
                    <div className="system-status">System Status: <span className="status-online">Seculyst_Online</span></div>
                    <div className="welcome-message">Welcome. Cyber Security Portfolio System</div>
                </div>
            </div>

            {/* 대시보드 그리드 */}
            <div className="dashboard-grid">
                {/* SKILL STACK 섹션 */}
                <div className="dashboard-section skill-stack">
                    <div className="section-header">
                        <span className="section-icon">🛡️</span>
                        <h3>SKILL STACK</h3>
                    </div>
                    <div className="skill-items">
                        <div className="skill-item">
                            <span className="skill-icon">🛡️</span>
                            <span>Firewall</span>
                        </div>
                        <div className="skill-item">
                            <span className="skill-icon">🔒</span>
                            <span>Encryption</span>
                        </div>
                        <div className="skill-item">
                            <span className="skill-icon">☁️</span>
                            <span>Cloud Security</span>
                        </div>
                    </div>
                </div>

                {/* OFFENSIVE 섹션 */}
                <div className="dashboard-section offensive">
                    <div className="section-header">
                        <span className="section-icon">⚔️</span>
                        <h3>OFFENSIVE</h3>
                    </div>
                    <div className="skill-items">
                        <div className="skill-item">
                            <span className="skill-icon">📄</span>
                            <span>Encryption</span>
                        </div>
                        <div className="skill-item">
                            <span className="skill-icon">🔧</span>
                            <span>Testing</span>
                        </div>
                        <div className="skill-item">
                            <span className="skill-icon">📊</span>
                            <span>Analysis</span>
                        </div>
                        <div className="skill-item">
                            <span className="skill-icon">💀</span>
                            <span>Malware</span>
                        </div>
                        <div className="skill-item">
                            <span className="skill-icon">🔍</span>
                            <span>Digital Forensics</span>
                        </div>
                    </div>
                </div>

                {/* CERTIFICATIONS 섹션 */}
                <div className="dashboard-section certifications">
                    <div className="section-header">
                        <span className="section-icon">🏆</span>
                        <h3>CERTIFICATIONS</h3>
                    </div>
                    <div className="cert-items">
                        <div className="cert-item">
                            <div className="cert-badge">CEH</div>
                        </div>
                        <div className="cert-item">
                            <div className="cert-badge">OSCP</div>
                        </div>
                        <div className="cert-item">
                            <div className="cert-badge">CISSP</div>
                        </div>
                        <div className="cert-item">
                            <div className="cert-badge">GSEC</div>
                        </div>
                    </div>
                </div>

                {/* PROJECTS 섹션 */}
                <div className="dashboard-section projects">
                    <div className="section-header">
                        <span className="section-icon">📁</span>
                        <h3>PROJECTS</h3>
                    </div>
                    <div className="project-items">
                        <div className="project-item">
                            <div className="project-icon">📊</div>
                            <div className="project-content">
                                <div className="project-title">Project Blackout</div>
                                <div className="project-subtitle">Vulnerability Assessment</div>
                                <button className="project-button">View Details</button>
                            </div>
                        </div>
                        <div className="project-item">
                            <div className="project-icon">🔍</div>
                            <div className="project-content">
                                <div className="project-title">Breach Response</div>
                                <div className="project-subtitle">Post-Incident Analysis</div>
                                <button className="project-button">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TIMELINE 섹션 */}
                <div className="dashboard-section timeline">
                    <div className="section-header">
                        <span className="section-icon">📅</span>
                        <h3>TIMELINE</h3>
                    </div>
                    <div className="timeline-items">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-year">2023</div>
                                <div className="timeline-event">CTF Winner</div>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-year">2022</div>
                                <div className="timeline-event">Security Analyst</div>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-year">2021</div>
                                <div className="timeline-event">CTF Winner</div>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-year">2020</div>
                                <div className="timeline-event">Penetration Tester</div>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-year">2019</div>
                                <div className="timeline-event">Security Researcher</div>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-year">2018</div>
                                <div className="timeline-event">CTF Winner</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

