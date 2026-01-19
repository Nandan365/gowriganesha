import { Play } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface Video {
  id: number;
  title: string;
  src: string;
}

export function VideoSection() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement }>({});

  useEffect(() => {
    const loadVideos = async () => {
      const modules = import.meta.glob('../../videos/**/*.{mp4,webm,mov}', { eager: true });
      const videoList: Video[] = Object.entries(modules)
        .map(([path, module], index) => ({
          id: index + 1,
          title: path.split('/').pop()?.replace(/\.[^.]+$/, '') || `Video ${index + 1}`,
          src: (module as { default: string }).default
        }));
      setVideos(videoList);
    };
    loadVideos();
  }, []);

  const handlePlayClick = (videoId: number) => {
    const videoElement = videoRefs.current[videoId];
    if (videoElement) {
      if (playingId === videoId) {
        videoElement.pause();
        setPlayingId(null);
      } else {
        // Pause all other videos
        Object.values(videoRefs.current).forEach(vid => vid.pause());
        videoElement.play();
        setPlayingId(videoId);
      }
    }
  };

  const handleVideoPlay = (videoId: number) => {
    setPlayingId(videoId);
  };

  const handleVideoPause = () => {
    setPlayingId(null);
  };
  return (
    <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4" 
            style={{ color: 'var(--clay-brown)', fontFamily: 'Georgia, serif' }}
          >
            Our Workshops in Action
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See the creativity and joy in our live clay art activities
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4 bg-black group">
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[video.id] = el;
                  }}
                  src={video.src}
                  className="w-full h-64 object-contain"
                  muted
                  onPlay={() => handleVideoPlay(video.id)}
                  onPause={handleVideoPause}
                />
                {/* Transparent Play Button Overlay */}
                {playingId !== video.id && (
                  <button
                    onClick={() => handlePlayClick(video.id)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/40 group-hover:scale-110 transition-all duration-300">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
