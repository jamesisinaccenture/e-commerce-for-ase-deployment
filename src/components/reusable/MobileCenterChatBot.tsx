import botAvatar from "/avatar.jpg";
import ChatBot from "react-chatbotify";

const MobileCenterChatBot = () => {
  const themes = [{ id: "minimal_midnight", version: "0.1.0" }];
  const helpOptions = [
    "Quick Questions",
    "Customer Support",
    "FAQ",
    "Track Order",
    "Browse Products",
  ];
  const settings = {
    general: {
      embedded: false,
    },
    header: {
      title: (
        <div
          style={{
            cursor: "pointer",
            margin: 0,
            fontSize: 20,
            fontWeight: "bold",
          }}
          onClick={() => window.open("https://github.com/diomazing/")}
        >
          MoBot
        </div>
      ),
      showAvatar: true,
      avatar: botAvatar,
    },
    tooltip: {
      mode: "CLOSE",
      text: "Hey I'm MoBot, how can I help you?",
    },
    botBubble: {
      showAvatar: true,
      avatar: botAvatar,
    },
  };

  const styles = {
    headerStyle: {
      background: "linear-gradient(to right, #008ECC, #00AFFF)",
      color: "#ffffff",
      padding: "10px",
    },
    botBubbleStyle: {
      backgroundColor: "#008ECC",
      color: "#ffffff",
      borderRadius: "10px",
      borderColor: "#008ECC",
      width: "100%",
      padding: "10px",
    },
    notificationButtonStyle: {
      display: "flex",
      alignItems: "center",
    },
    notificationIconStyle: {
      fill: "#008ECC",
    },
  };

  const flow = {
    start: {
      message: () => {
        const seenBefore = localStorage.getItem("example_welcome");
        if (seenBefore) {
          return `Welcome back ${seenBefore}!`;
        }
        return "Hello, I am MoBot 👋! Welcome to Mobile Center, I'm excited to help you!";
      },
      function: () => {
        const user: any = localStorage.getItem("user");
        const parsedUser = JSON.parse(user);
        localStorage.setItem("example_welcome", parsedUser?.first_name);
      },
      transition: { duration: 1000 },
      path: "show_options",
    },
    show_options: {
      message:
        "To help you get started, you can choose from the following options:",
      options: helpOptions,
      path: "process_options",
    },
    prompt_again: {
      message: "Do you need any other help?",
      options: helpOptions,
      path: "process_options",
    },
    unknown_input: {
      message:
        "Sorry, I'm not yet like my friend GPT and Gemini 😢! If you require further assistance, you may call the people who developed me in Accenture",
      options: helpOptions,
      path: "process_options",
    },
    process_options: {
      transition: { duration: 0 },
      chatDisabled: true,
      path: async (params: any) => {
        let link = "";
        switch (params.userInput) {
          case helpOptions[0]:
            link = "https://www.youtube.com/shorts/SXHMnicI6Pg";
            break;
          case helpOptions[1]:
            link = "https://www.youtube.com/shorts/-enuIBVmKy4";
            break;
          case helpOptions[2]:
            link = "https://www.youtube.com/shorts/ARNoOw494xU";
            break;
          case helpOptions[3]:
            link = "https://www.youtube.com/shorts/4ZSTGd79w2k";
            break;
          case helpOptions[4]:
            link = "https://www.youtube.com/shorts/_se4uf_s3PA";
            break;
          default:
            return "unknown_input";
        }
        await params.injectMessage("Sit tight! I'll send you right there!");
        setTimeout(() => {
          window.open(link);
        }, 1000);
        return "repeat";
      },
    },
    repeat: {
      transition: { duration: 3000 },
      path: "prompt_again",
    },
    end: {
      message: "See you, goodbye!",
    },
  };

  return (
    <div className="absolute bottom-5 right-5">
      <ChatBot
        themes={themes}
        settings={settings}
        styles={styles}
        flow={flow}
      />
    </div>
  );
};

export default MobileCenterChatBot;
