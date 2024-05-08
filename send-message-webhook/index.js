//const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
const discordWebhookUrl = "https://discord.com/api/webhooks/1111111111111111111/11111111111111111111111111111111111111111111111111111111111111111111";

const sendDiscordMessage = async (message) => {
  try {
    await fetch(discordWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: message,
      }),
    })
  } 
  catch (error) {
    console.log(error.message)
  };
};

await sendDiscordMessage('반갑습니다');
