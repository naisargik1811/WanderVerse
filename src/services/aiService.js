export const generateDestinationInfo = async (destination, interests, onProgress) => {
  // Simulate network delay and streaming response
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
  const mockResponses = {
    kyoto: {
      story: `### The Whispers of Ancient Kyoto\n\nAs you step off the modern bullet train, the air shifts. You are in Kyoto, a city where time seems to fold onto itself. The scent of matcha and incense lingers in the narrow alleyways of Gion. Imagine walking through the Arashiyama Bamboo Grove at dawn, the towering green stalks swaying rhythmically, filtering the morning light into a soft, ethereal glow. This is not just a city; it's a living museum of Japan's soul.`,
      gems: `### Hidden Gems\n\n*   **Otagi Nenbutsu-ji**: Skip the crowded temples and visit this whimsical sanctuary housing 1,200 unique stone statues of rakan (buddha's disciples), each carved by a different person.\n*   **Kurama to Kibune Hike**: A mystical mountain trail through ancient cedar forests, ending in a village famous for dining over a flowing river.\n*   **Kichi Kichi Omurice**: A legendary, tucked-away diner where the chef turns cooking an omelet into a theatrical performance.`,
      culture: `### Local Culture & Events\n\n*   **Tea Ceremony (Sado)**: Participate in a traditional tea ceremony in a machiya (traditional wooden townhouse) to understand the Zen principles of harmony, respect, purity, and tranquility.\n*   **Gion Matsuri**: If visiting in July, witness one of Japan's most famous festivals with towering, exquisitely decorated floats.\n*   **Kyo-ryori**: Indulge in Kyoto's traditional multi-course dining, focusing on seasonal ingredients and meticulous presentation.`
    },
    default: {
      story: `### The Magic of ${destination}\n\nEvery journey to ${destination} begins with a sense of wonder. The local atmosphere wraps around you, a blend of historic echoes and vibrant modern life. Whether it's the distinctive architecture that frames the sky or the local chatter echoing through the bustling markets, ${destination} offers an immersive tapestry of experiences waiting to be unraveled.`,
      gems: `### Hidden Gems\n\n*   **The Secret Courtyard**: A beautifully preserved historical courtyard hidden behind a bustling main street, offering a serene escape.\n*   **Old Town Artisan Workshop**: A small collective where locals craft traditional goods using centuries-old techniques.\n*   **The Overlook**: A lesser-known vantage point that provides panoramic views of the city at sunset without the crowds.`,
      culture: `### Local Culture & Events\n\n*   **The Seasonal Market**: A vibrant gathering where locals trade artisan goods, fresh produce, and unique street food.\n*   **Heritage Festival**: An upcoming celebration featuring traditional music, dance, and storytelling that reflects the region's rich history.\n*   **Culinary Masterclass**: Join a local chef to learn the secrets behind ${destination}'s signature dish.`
    }
  };

  const key = destination.toLowerCase().includes('kyoto') ? 'kyoto' : 'default';
  const data = mockResponses[key];

  let fullText = `${data.story}\n\n${data.gems}\n\n${data.culture}`;
  
  // If interests are provided, add a custom note
  if (interests) {
    fullText += `\n\n### Curated for You\nBased on your interest in **${interests}**, we highly recommend checking out specialized local tours that delve deep into this aspect of the region!`;
  }

  // Simulate streaming
  let currentText = '';
  const words = fullText.split(' ');
  
  for (let i = 0; i < words.length; i++) {
    currentText += words[i] + ' ';
    if (i % 3 === 0) {
      onProgress(currentText);
      await delay(50); // streaming speed
    }
  }
  
  onProgress(currentText);
  return currentText;
};
