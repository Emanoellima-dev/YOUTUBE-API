import axios from 'axios';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const search = async (req, res) => {
 const { channelName, order } = req.params;

  try {
    const searchResponse = await axios.get(`${BASE_URL}/search`, {
      params: {
        key: YOUTUBE_API_KEY,
        q: channelName,
        type: 'channel',
        part: 'snippet',
        maxResults: 1,
      }
    });


    if (!searchResponse.data.items || searchResponse.data.items.length === 0) {
      return res.status(404).json({ message: 'Canal não encontrado.' });
    }

    const channelId = searchResponse.data.items[0].id.channelId;


     const validOrders = ['date', 'relevance', 'rating', 'title', 'viewCount'];
    if (!validOrders.includes(order)) {
      return res.status(400).json({ error: 'Ordenação inválida' });
    }


    const videosResponse = await axios.get(`${BASE_URL}/search`, {
      params: {
        key: YOUTUBE_API_KEY,
        channelId: channelId,
        part: 'snippet',
        order: order,
        maxResults: 5,
      }
    });


    if (!videosResponse.data.items || videosResponse.data.items.length === 0) {
      return res.status(404).json({ message: 'Nenhum vídeo encontrado para este canal.' });
    }


    const videos = videosResponse.data.items.map(video => ({
      title: video.snippet.title,
      videoUrl: `https://www.youtube.com/watch?v=${video.id.videoId}`,
      publishedAt: video.snippet.publishedAt,
      description: video.snippet.description,
    }));

    res.json({ videos });

    if (order === 'title') {
      videos.sort((a, b) => a.title.localeCompare(b.title));
    }

  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar vídeos do YouTube', error: error.message });
  } 
};
