export default function EnhancedBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large primary blobs */}
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/25 to-purple-400/25 rounded-full mix-blend-multiply filter blur-xl animate-blob"
        style={{ animationDuration: '7s' }}
      />
      <div 
        className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/25 to-pink-400/25 rounded-full mix-blend-multiply filter blur-xl animate-blob"
        style={{ animationDuration: '8s', animationDelay: '2s' }}
      />
      <div 
        className="absolute -bottom-8 left-1/3 w-72 h-72 bg-gradient-to-r from-indigo-400/25 to-blue-400/25 rounded-full mix-blend-multiply filter blur-xl animate-blob"
        style={{ animationDuration: '9s', animationDelay: '4s' }}
      />
      
      {/* Medium secondary blobs */}
      <div 
        className="absolute top-1/3 right-1/6 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 rounded-full mix-blend-multiply filter blur-lg animate-blob"
        style={{ animationDuration: '6s', animationDelay: '1s' }}
      />
      <div 
        className="absolute bottom-1/4 right-1/2 w-56 h-56 bg-gradient-to-r from-violet-400/20 to-rose-400/20 rounded-full mix-blend-multiply filter blur-lg animate-blob"
        style={{ animationDuration: '10s', animationDelay: '3s' }}
      />
      <div 
        className="absolute top-2/3 left-1/6 w-48 h-48 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-lg animate-blob"
        style={{ animationDuration: '5s', animationDelay: '5s' }}
      />
      
      {/* Small accent blobs */}
      <div 
        className="absolute top-1/6 left-1/2 w-32 h-32 bg-gradient-to-r from-yellow-400/15 to-orange-400/15 rounded-full mix-blend-multiply filter blur-md animate-blob"
        style={{ animationDuration: '4s', animationDelay: '2s' }}
      />
      <div 
        className="absolute bottom-1/6 left-2/3 w-40 h-40 bg-gradient-to-r from-lime-400/15 to-green-400/15 rounded-full mix-blend-multiply filter blur-md animate-blob"
        style={{ animationDuration: '11s', animationDelay: '6s' }}
      />
      <div 
        className="absolute top-1/2 right-1/8 w-36 h-36 bg-gradient-to-r from-fuchsia-400/15 to-purple-400/15 rounded-full mix-blend-multiply filter blur-md animate-blob"
        style={{ animationDuration: '7s', animationDelay: '1.5s' }}
      />
      
      {/* Micro accent dots */}
      <div 
        className="absolute top-1/5 left-3/4 w-20 h-20 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-full mix-blend-multiply filter blur-sm animate-blob"
        style={{ animationDuration: '3s', animationDelay: '4s' }}
      />
      <div 
        className="absolute bottom-1/5 right-1/5 w-24 h-24 bg-gradient-to-r from-red-400/15 to-pink-400/15 rounded-full mix-blend-multiply filter blur-sm animate-blob"
        style={{ animationDuration: '12s', animationDelay: '7s' }}
      />
      
      {/* Floating orbs with different blend modes */}
      <div 
        className="absolute top-1/4 left-1/8 w-16 h-16 bg-blue-300/30 rounded-full mix-blend-screen filter blur-sm animate-float"
        style={{ animationDuration: '8s', animationDelay: '2s' }}
      />
      <div 
        className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-purple-300/40 rounded-full mix-blend-screen filter blur-sm animate-float"
        style={{ animationDuration: '6s', animationDelay: '4s' }}
      />
      <div 
        className="absolute top-3/4 left-1/2 w-20 h-20 bg-emerald-300/25 rounded-full mix-blend-screen filter blur-sm animate-float"
        style={{ animationDuration: '10s', animationDelay: '1s' }}
      />
    </div>
  );
}
