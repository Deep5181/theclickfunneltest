import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const professionalPlaylists = [
  {
    category: "Design Thinkers",
    playlists: [
      { id: "37i9dQZF1EIgNZCaOGb0Mi", name: "Design Mode" },
      { id: "37i9dQZF1DX9sIqqvKsjG8", name: "Instrumental Study" },
      { id: "37i9dQZF1DX3PFzdbtx1Us", name: "Creative Flow" },
    ],
  },
  {
    category: "UI/UX Designers",
    playlists: [
      { id: "37i9dQZF1DX4dyzvuaRJ0n", name: "Coding Focus" },
      { id: "37i9dQZF1DX8mWv7JDZ0Ht", name: "Pixel Perfect" },
      { id: "37i9dQZF1DWZeKCadgRdKQ", name: "Deep Focus" },
    ],
  },
  {
    category: "Marketers",
    playlists: [
      { id: "37i9dQZF1DX0vHZ8elq0UK", name: "Brainstorm Beats" },
      { id: "37i9dQZF1DX4Wsb4d7NKfP", name: "Productivity Boost" },
      { id: "37i9dQZF1DX6aTaZa0K6VA", name: "Upbeat Office" },
    ],
  },
  {
    category: "Content Creators",
    playlists: [
      { id: "37i9dQZF1DX6VdMW310YC7", name: "Chill Vibes" },
      { id: "37i9dQZF1DX4sWSpwq3LiO", name: "Peaceful Piano" },
      { id: "37i9dQZF1DX4o1oenSJRJd", name: "Narrative Waves" },
    ],
  },
  {
    category: "Fashion Designers",
    playlists: [
      { id: "37i9dQZF1DX8C585qnMYHP", name: "Fashion Forward" },
      { id: "37i9dQZF1DX2PG4mbkilf3", name: "Runway Ready" },
      { id: "37i9dQZF1DX5KJJSIYaNvs", name: "Textures & Threads" },
    ],
  },
];

const SpotifyPlaylist = () => {
  const [playlistId, setPlaylistId] = useState("37i9dQZF1EIgNZCaOGb0Mi"); // Default: Design Mode
  const [accessToken, setAccessToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [playlistData, setPlaylistData] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(
              // eslint-disable-next-line no-undef
              `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`
            )}`,
          },
          body: "grant_type=client_credentials",
        });
        const data = await response.json();
        setAccessToken(data.access_token);
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    if (accessToken && playlistId) {
      const fetchPlaylistData = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://api.spotify.com/v1/playlists/${playlistId}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          const data = await response.json();
          setPlaylistData(data);
        } catch (error) {
          console.error("Error fetching playlist data:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchPlaylistData();
    }
  }, [accessToken, playlistId]);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden px-4 py-12 sm:py-16">
      <div className=" mx-auto">
        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex justify-center items-center mb-8">
            <span className="text-sm font-semibold text-white uppercase border border-gray-400 px-3 py-1 rounded-md">
              Focus Music for Creatives
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {professionalPlaylists.map((category) => (
              <motion.button
                key={category.category}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  professionalPlaylists.some((cat) =>
                    cat.playlists.some((p) => p.id === playlistId)
                  ) && category.playlists.some((p) => p.id === playlistId)
                    ? "bg-white text-black shadow-lg"
                    : "bg-[#282828] text-gray-300 hover:bg-[#383838]"
                }`}
                onClick={() => setPlaylistId(category.playlists[0].id)}
              >
                {category.category}
              </motion.button>
            ))}
          </div>

          {/* Playlist Selector */}
          {professionalPlaylists.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0 }}
              animate={{
                opacity: category.playlists.some((p) => p.id === playlistId)
                  ? 1
                  : 0,
                height: category.playlists.some((p) => p.id === playlistId)
                  ? "auto"
                  : 0,
              }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {category.playlists.map((playlist) => (
                  <motion.button
                    key={playlist.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setPlaylistId(playlist.id)}
                    className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                      playlistId === playlist.id
                        ? "bg-white text-black shadow-md"
                        : "bg-[#1DB954] bg-opacity-20 text-gray-300 hover:bg-opacity-30"
                    }`}
                  >
                    {playlist.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Playlist Info */}
        {playlistData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
              {playlistData.name}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              {playlistData.tracks.total} tracks •{" "}
              {playlistData.description || "Curated for focus"}
            </p>
          </motion.div>
        )}

        {/* Spotify Embed */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.98 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.4,
          }}
          className="relative rounded-xl overflow-hidden shadow-2xl bg-[#181818]"
        >
          {isLoading && (
            <div className="absolute inset-0 bg-[#181818] flex items-center justify-center z-10">
              <motion.div
                animate={{
                  rotate: 360,
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="w-12 h-12 border-4 border-[#1DB954] border-t-transparent rounded-full"
              ></motion.div>
            </div>
          )}

          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-8 bg-[#181818] z-20"></div>
            <iframe
              title="Spotify Playlist"
              className="w-full aspect-square sm:aspect-video min-h-[300px] sm:min-h-[450px]"
              src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0&hideCover=1`}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              onLoad={() => setIsLoading(false)}
              style={{ marginTop: "-32px" }}
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpotifyPlaylist;
