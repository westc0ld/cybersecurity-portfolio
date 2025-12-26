import Layout from "./layout";
import ChatGPT from "../components/chatgpt";
import TerminalBackground from "../components/terminalBackground";

export default function Home() {
  return (
    <Layout>
      <TerminalBackground />
      <div className="body">
        <section id="chat" style={{ paddingTop: "40px", paddingBottom: "20px", position: "relative", zIndex: 1 }}>
          <ChatGPT />
        </section>
      </div>
    </Layout>
  );
}

