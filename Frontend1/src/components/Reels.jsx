import { useState, useEffect } from 'react';
import { Play, Instagram } from 'lucide-react';

export default function InstagramReelsGrid() {
  const [reels, setReels] = useState([
    {
      id: 1,
      title: "Sunset in Bali",
      link: "https://www.instagram.com/p/DIgTlbASpnP/",
      hashtags: "#travel #bali #sunset",
      thumbnail: "r1.png",
      views: "1.2M",
      likes: "87K",
      isLoading: true
    },
    {
      id: 2,
      title: "Mountain hiking adventure",
      link: "https://www.instagram.com/reel/DIVxsuNS_vY/",
      hashtags: "#hiking #adventure #nature",
      thumbnail: "r2.png",
      views: "456K",
      likes: "32K",
      isLoading: true
    },
    {
      id: 3,
      title: "Street food tour",
      link: "https://www.instagram.com/doggosheaven_petresort/reel/DHxe7uEylr3/",
      hashtags: "#food #streetfood #foodie",
      thumbnail: "r3.png",
      views: "789K",
      likes: "45K",
      isLoading: true
    },
    {
      id: 4,
      title: "Ocean diving",
      link: "https://www.instagram.com/p/DHc7DL9yO5_/",
      hashtags: "#diving #ocean #marine",
      thumbnail: "r4.png",
      views: "567K",
      likes: "41K",
      isLoading: true
    },
    {
      id: 5,
      title: "Tokyo night market",
      link: "https://www.instagram.com/p/DGM-nLYS6Q0/",
      hashtags: "#tokyo #japan #travel",
      thumbnail: "r5.png",
      views: "892K",
      likes: "63K",
      isLoading: true
    },
    {
      id: 6,
      title: "Safari adventure",
      link: "https://www.instagram.com/p/DFNVEVQPHEQ/",
      hashtags: "#safari #wildlife #africa",
      thumbnail: "r6.png",
      views: "723K",
      likes: "52K",
      isLoading: true
    },
  
   
  ]);

  // Simulate loading thumbnails (in a real app, this would fetch actual thumbnails)
  useEffect(() => {
    const loadThumbnails = async () => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Update reels to show they're loaded
      setReels(prevReels => 
        prevReels.map(reel => ({
          ...reel,
          isLoading: false
        }))
      );
    };
    
    loadThumbnails();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
      
      </header>

      {/* Main content */}
      <main className="p-4">
        {/* Profile summary */}
        <div className="flex items-center mb-6">
          <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 p-0.5">
            <div className="h-full w-full rounded-full border-2 border-white overflow-hidden flex items-center justify-center bg-white">
              <Instagram className="h-10 w-10 text-gray-800" />
            </div>
          </div>
          <div className="ml-4">
            <h2 className="font-bold text-lg">@doggosheaven_petresort</h2>
            <p className="text-sm text-gray-600">Pet Resort</p>
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="flex border-b border-gray-200 mb-4">
          <button className="flex items-center px-4 py-2 border-b-2 border-blue-500 text-sm font-medium text-blue-500">
            <div className="h-4 w-4 mr-1 grid grid-cols-3 gap-px">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-blue-500 w-1 h-1"></div>
              ))}
            </div>
            <span>Reels</span>
          </button>
        </div>

        {/* Reels grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {reels.map((reel) => (
            <a 
              key={reel.id} 
              href={reel.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block relative aspect-[14/16] rounded overflow-hidden group"
            >
              {/* Video Thumbnail */}
              {reel.isLoading ? (
                <div className={`absolute inset-0 bg-gradient-to-br ${getGradientColor(reel.id)}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                </div>
              ) : (
                <img 
                  src={reel.thumbnail} 
                  alt={reel.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              
              {/* Vignette overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div> */}
              
              <div className="absolute inset-0 flex flex-col">
                <div className="flex-grow flex items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white bg-opacity-30 backdrop-blur-sm">
                    <Play className="h-6 w-6 text-black" fill="white" />
                  </div>
                </div>
                
                
              </div>
              
           
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

// Helper function to get different gradient colors based on reel ID
function getGradientColor(id) {
  const colors = [
    'from-blue-400 to-purple-500',
    'from-green-400 to-teal-500',
    'from-red-400 to-pink-500',
    'from-yellow-400 to-orange-500',
    'from-indigo-400 to-blue-500',
    'from-pink-400 to-red-500'
  ];
  
  return colors[(id - 1) % colors.length];
}