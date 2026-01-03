'use client';
import { useState, useEffect } from 'react';

export default function ForeverCustomers() {
  const [loading, setLoading] = useState(false);

  // Predefined images without API calls
  const images = {
    emailUI: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200",
    productUI: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200",
    floatingStats: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
    marketingTools: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  const salesData = {
    amount: "₹ 1,057,299",
    growth: "+17%",
    period: "Sales attributed to marketing"
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#0A1414] text-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#95BF47] to-[#00A37F] text-[#0A1414] px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-[#0A1414] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-wider">Wikipedia Community</span>
            <span className="w-1.5 h-1.5 bg-[#0A1414] rounded-full" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your <span className="text-[#95BF47]">Forever Contributors</span>
          </h1>
          
          <p className="text-lg text-[#F5F5F7]">
            Build lasting relationships with Wikipedia contributors through collaborative 
            editing and knowledge sharing designed for modern encyclopedia development.
          </p>
        </div>

        {/* Main Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* Left Card: Wikipedia Analytics */}
          <div className="bg-[#121212] rounded-xl md:rounded-2xl p-6 border border-[#95BF47]/10">
            {/* Main Image */}
            <div className="mb-6 overflow-hidden rounded-lg">
              {loading ? (
                <div className="w-full h-48 md:h-64 bg-[#95BF47]/10 animate-pulse rounded-lg"></div>
              ) : (
                <img
                  src={images.emailUI}
                  alt="Wikipedia analytics dashboard showing article statistics"
                  className="w-full h-48 md:h-64 object-cover"
                  loading="lazy"
                />
              )}
            </div>

            {/* Floating Stats Card */}
            <div className="bg-white text-black rounded-lg px-4 py-3 mb-6 max-w-xs">
              <p className="text-xs text-[#6B6B6B] mb-1">
                {salesData.period}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold">
                  {salesData.amount}
                </p>
                <span className="text-[#008060] text-sm font-medium bg-[#E8F5F1] px-2 py-1 rounded-md">
                  {salesData.growth}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div>
              <h3 className="text-xl font-bold mb-3">
                Reach More Readers for Less
              </h3>
              <p className="text-sm text-[#F5F5F7] leading-relaxed mb-4">
                Acquire new readers and keep them coming back for more with{' '}
                <span className="text-[#95BF47] font-medium">
                  comprehensive articles
                </span>
                . Track engagement, analyze readership, and optimize your content 
                with data-driven insights.
              </p>
              
              {/* Feature Highlights */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#95BF47] rounded-full mr-2"></div>
                  <span className="text-sm">Article Analytics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#95BF47] rounded-full mr-2"></div>
                  <span className="text-sm">Reader Segmentation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#95BF47] rounded-full mr-2"></div>
                  <span className="text-sm">Engagement Tracking</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#95BF47] rounded-full mr-2"></div>
                  <span className="text-sm">Content Optimization</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Wikipedia Collaboration */}
          <div className="bg-[#121212] rounded-xl md:rounded-2xl p-6 border border-[#95BF47]/10">
            {/* Main Image */}
            <div className="mb-6 overflow-hidden rounded-lg">
              {loading ? (
                <div className="w-full h-48 md:h-64 bg-[#00A37F]/10 animate-pulse rounded-lg"></div>
              ) : (
                <img
                  src={images.productUI}
                  alt="Wikipedia collaboration interface with editing tools"
                  className="w-full h-48 md:h-64 object-cover"
                  loading="lazy"
                />
              )}
            </div>

            {/* Content Area */}
            <div>
              <div className="inline-flex items-center bg-[#1E3AFF]/10 text-[#1E3AFF] text-xs font-medium px-3 py-1 rounded-full mb-4">
                <div className="w-2 h-2 bg-[#1E3AFF] rounded-full mr-2"></div>
                Collaborative Editing
              </div>
              
              <h3 className="text-xl font-bold mb-3">
                Unlock New Knowledge with Collaboration
              </h3>
              <p className="text-sm text-[#F5F5F7] leading-relaxed mb-6">
                Create{' '}
                <span className="text-[#00A37F] font-medium">
                  comprehensive articles
                </span>{' '}
                with community contributions, fact-checking, and peer reviews. 
                Scale your knowledge base with collaborative editing tools that 
                streamline content creation and verification.
              </p>
              
              {/* Feature List */}
              <div className="space-y-3">
                <div className="flex items-start p-3 bg-[#0A1414]/50 rounded-lg">
                  <div className="w-6 h-6 bg-[#008060]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-[#00A37F] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Community Contributions</h4>
                    <p className="text-xs text-[#6B6B6B]">Collaborate with experts worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 bg-[#0A1414]/50 rounded-lg">
                  <div className="w-6 h-6 bg-[#008060]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-[#00A37F] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Fact Checking</h4>
                    <p className="text-xs text-[#6B6B6B]">Verify information with reliable sources</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 bg-[#0A1414]/50 rounded-lg">
                  <div className="w-6 h-6 bg-[#008060]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-[#00A37F] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Peer Review</h4>
                    <p className="text-xs text-[#6B6B6B]">Get feedback from experienced editors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#121212] p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-[#95BF47] mb-1">55M+</div>
            <div className="text-xs text-[#F5F5F7]">Articles</div>
          </div>
          <div className="bg-[#121212] p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-[#00A37F] mb-1">1B+</div>
            <div className="text-xs text-[#F5F5F7]">Monthly Readers</div>
          </div>
          <div className="bg-[#121212] p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-[#008060] mb-1">300+</div>
            <div className="text-xs text-[#F5F5F7]">Languages</div>
          </div>
          <div className="bg-[#121212] p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-[#1E3AFF] mb-1">24/7</div>
            <div className="text-xs text-[#F5F5F7]">Available</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-[#0A1414] p-6 rounded-xl border border-[#95BF47]/20">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Ready to Contribute to Wikipedia?
            </h3>
            
            <p className="text-[#F5F5F7] mb-6">
              Join millions of contributors growing the world's knowledge
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-gradient-to-r from-[#95BF47] to-[#00A37F] text-[#0A1414] px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                Start Contributing
              </button>
              <button className="bg-transparent border border-[#95BF47] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#95BF47] hover:text-[#0A1414] transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-8">
            <p className="text-sm text-[#F5F5F7] mb-4">Trusted by readers worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <div className="text-white text-sm">100% Free</div>
              <div className="text-[#95BF47] text-sm">Community-Driven</div>
              <div className="text-white text-sm">Ad-Free</div>
              <div className="text-[#00A37F] text-sm">Open Source</div>
              <div className="text-white text-sm">Multilingual</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}