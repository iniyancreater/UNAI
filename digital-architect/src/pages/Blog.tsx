import { motion } from "motion/react";
import { 
  ArrowRight, 
  Clock, 
  Mail, 
  Tag, 
  User,
  ChevronRight,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

// ── MOCK DATA ──
const featuredPost = {
  category: "Strategic Insight",
  title: "The Future of AI in Enterprise Architecture: A 2026 Perspective",
  desc: "How leading organizations are restructuring their core systems around multi-agent orchestration and real-time LLM inference to create dynamic, autonomous business operations.",
  author: "Arjun Mehta",
  date: "April 02, 2026",
  readTime: "8 min read",
  img: "https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?w=1200&q=80",
};

const posts = [
  {
    title: "Zero-Trust Security Models for Global Fintechs",
    category: "Cybersecurity",
    date: "Mar 28, 2026",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80",
    desc: "A deep dive into why perimeter defenses are failing and how to implement a robust zero-trust architecture at scale.",
  },
  {
    title: "From Monolith to Micro-Frontends",
    category: "Engineering",
    date: "Mar 25, 2026",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    desc: "Step-by-step strategies for decoupling large monolithic applications without disrupting user experience.",
  },
  {
    title: "Maximizing ROI with Headless E-Commerce",
    category: "Digital Strategy",
    date: "Mar 22, 2026",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    desc: "Why modern retail brands are abandoning legacy CMS platforms for fast, API-first headless commerce solutions.",
  },
  {
    title: "Real-time Telemetry in Cloud Infrastructure",
    category: "Cloud",
    date: "Mar 18, 2026",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    desc: "Harnessing the power of real-time server telemetry to drive auto-scaling decisions and cost efficiency.",
  },
  {
    title: "The Impact of WebAssembly on Front-End Performance",
    category: "Engineering",
    date: "Mar 15, 2026",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    desc: "How WebAssembly is expanding the possibilities of what can be built in the browser.",
  },
  {
    title: "Building Resilient Data Pipelines",
    category: "Data Science",
    date: "Mar 10, 2026",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    desc: "Best practices for architecting fault-tolerant data pipelines that can process petabytes of analytical data.",
  },
];

const categories = [
  { name: "Engineering", count: 24 },
  { name: "AI & Innovation", count: 18 },
  { name: "Cybersecurity", count: 12 },
  { name: "Digital Strategy", count: 15 },
  { name: "Cloud Architecture", count: 9 },
];

const recentPosts = [
  { title: "Scaling React Native Apps for Millions of Users", date: "April 01, 2026" },
  { title: "The Hidden Costs of Cloud Migration", date: "Mar 30, 2026" },
  { title: "Automating QA with Generative AI Models", date: "Mar 29, 2026" },
];

const Blog = () => {
  return (
    <main className="bg-bg-subtle min-h-screen">
      {/* ── Page Header ── */}
      <section 
        className="relative pt-40 pb-20 lg:pt-48 lg:pb-24 overflow-hidden"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div className="container-xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-white mb-6">Insights & Ideas</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            The UNAI <span className="gradient-text">Journal</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto text-white/70"
          >
            Deep dives, strategic perspectives, and engineering guides from our team of global experts.
          </motion.p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          
          {/* ── Featured Article ── */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16 md:mb-24"
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp size={20} className="text-indigo" />
              <h2 className="text-2xl font-bold text-navy">Featured Read</h2>
            </div>
            
            <div className="card p-0 overflow-hidden flex flex-col lg:flex-row group hover:shadow-premium transition-all duration-500 bg-white cursor-pointer">
              <div className="lg:w-1/2 h-64 lg:h-80 overflow-hidden relative shrink-0">
                <img 
                  src={featuredPost.img} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                <span className="badge badge-indigo self-start mb-6">{featuredPost.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4 group-hover:text-indigo transition-colors duration-300 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-[1.05rem] text-muted leading-relaxed flex-1">
                  {featuredPost.desc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Main Layout: Grid + Sidebar ── */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left: 3-Column Blog Grid */}
            <div className="lg:w-[75%]">
              <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                <h2 className="text-2xl font-bold text-navy">Latest Articles</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                  <motion.div
                    key={post.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="card p-0 flex flex-col h-full overflow-hidden group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={post.img} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,47,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-indigo bg-indigo/5 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs font-semibold text-muted">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-3 text-navy group-hover:text-indigo transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[0.9rem] text-muted leading-relaxed mb-6 flex-1 line-clamp-3">
                        {post.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Sidebar */}
            <aside className="lg:w-[25%] space-y-10">
              
              {/* Categories */}
              <div className="card p-8 bg-white border border-border/50 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <Tag size={18} className="text-indigo" />
                  <h3 className="font-bold text-lg text-navy">Categories</h3>
                </div>
                <ul className="space-y-3">
                  {categories.map(c => (
                    <li key={c.name}>
                      <button className="w-full flex items-center justify-between group">
                        <span className="text-muted group-hover:text-indigo font-medium transition-colors text-[0.95rem]">
                          {c.name}
                        </span>
                        <span className="text-xs font-bold text-indigo/50 bg-indigo/5 px-2 py-1 rounded-md group-hover:bg-indigo/10 group-hover:text-indigo transition-colors">
                          {c.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="card p-8 bg-white border border-border/50 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <Clock size={18} className="text-indigo" />
                  <h3 className="font-bold text-lg text-navy">Recent Posts</h3>
                </div>
                <div className="space-y-6">
                  {recentPosts.map((post, i) => (
                    <div key={post.title} className="group cursor-pointer">
                      <h4 className="text-[0.95rem] font-bold text-navy group-hover:text-indigo leading-snug mb-1 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-xs font-medium text-muted">
                        {post.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </aside>
          </div>
          
        </div>
      </section>
    </main>
  );
};

export default Blog;
