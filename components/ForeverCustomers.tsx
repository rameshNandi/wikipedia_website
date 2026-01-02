"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ForeverCustomers() {
  const [images, setImages] = useState({
    emailUI: '',
    productUI: '',
    floatingStats: '',
    marketingTools: ''
  });
  const [loading, setLoading] = useState(true);
  const [salesData, setSalesData] = useState({
    amount: "₹ 1,057,299",
    growth: "+17%",
    period: "Sales attributed to marketing"
  });

  // 从Pexels API获取图像
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        
        // 请替换为您的Pexels API密钥
        const API_KEY = 'YOUR_PEXELS_API_KEY';
        
        // 为每个图像定义搜索查询
        const queries = {
          emailUI: 'email marketing dashboard ecommerce analytics',
          productUI: 'B2B wholesale product catalog dashboard',
          floatingStats: 'data visualization sales growth chart',
          marketingTools: 'digital marketing social media campaign'
        };

        // 并行获取所有图像
        const fetchPromises = Object.entries(queries).map(async ([key, query]) => {
          try {
            const response = await fetch(
              `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=3&orientation=landscape`,
              {
                headers: {
                  Authorization: API_KEY
                }
              }
            );
            
            if (response.ok) {
              const data = await response.json();
              // 从结果中随机选择一个图像
              const randomIndex = Math.floor(Math.random() * Math.min(3, data.photos.length));
              return { 
                key, 
                url: data.photos[randomIndex]?.src.large || '',
                alt: data.photos[randomIndex]?.alt || `${key} image`
              };
            }
            return { key, url: '', alt: `${key} image` };
          } catch (error) {
            console.error(`Error fetching ${key} image:`, error);
            return { key, url: '', alt: `${key} image` };
          }
        });

        const results = await Promise.all(fetchPromises);
        const newImages = {};
        
        results.forEach(result => {
          newImages[result.key] = {
            url: result.url,
            alt: result.alt
          };
        });

        // 设置获取的图像或备用图像
        setImages({
          emailUI: newImages.emailUI.url || 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200',
          productUI: newImages.productUI.url || 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200',
          floatingStats: newImages.floatingStats.url || 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w-800',
          marketingTools: newImages.marketingTools.url || 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w-800'
        });
        
      } catch (error) {
        console.error('Error fetching images:', error);
        // API失败时的备用图像
        setImages({
          emailUI: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200',
          productUI: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200',
          floatingStats: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
          marketingTools: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // 响应式配置
  const containerClasses = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
  const cardGradient = {
    background: 'linear-gradient(180deg, rgba(3, 25, 27, 0.8) 0%, rgba(2, 11, 12, 0.9) 100%)'
  };

  return (
    <section className="bg-[#0A1414] text-white py-12 md:py-20">
      <div className={containerClasses}>
        
        {/* 标题部分 */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#00A37F] text-sm md:text-base font-medium mb-3 md:mb-4 uppercase tracking-wide">
            Direct and wholesale
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-4xl mx-auto px-4">
            Find your forever customers with integrated commerce solutions
          </h1>
          <p className="text-[#6B6B6B] text-base md:text-lg mt-4 md:mt-6 max-w-3xl mx-auto px-4">
            Build lasting relationships with customers through personalized marketing 
            and scalable B2B solutions designed for modern commerce.
          </p>
        </div>

        {/* 卡片网格 */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          
          {/* 左侧卡片：营销分析 */}
          <div 
            className="relative rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden border border-[#1A2A2A]"
            style={cardGradient}
          >
            {/* 主图像 */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-6 md:mb-8">
              {loading ? (
                <div className="w-full h-full bg-[#1A2A2A] animate-pulse rounded-xl"></div>
              ) : (
                <Image
                  src={images.emailUI}
                  alt={images.emailUI.alt || "Email marketing analytics dashboard showing customer engagement metrics"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
              )}
            </div>

            {/* 浮动统计卡片 */}
            <div className="absolute right-4 md:right-6 top-44 md:top-52 lg:top-60 bg-white text-black rounded-xl md:rounded-2xl px-4 py-3 md:px-5 md:py-4 shadow-2xl max-w-xs z-20 border border-[#F5F5F7]">
              <p className="text-xs md:text-sm text-[#6B6B6B] mb-1">
                {salesData.period}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-lg md:text-xl font-semibold">
                  {salesData.amount}
                </p>
                <span className="text-[#008060] text-sm md:text-base font-medium bg-[#E8F5F1] px-2 py-1 rounded-md">
                  {salesData.growth}
                </span>
              </div>
              <p className="text-xs text-[#6B6B6B] mt-2">
                Last 30 days performance
              </p>
            </div>

            {/* 内容区域 */}
            <div className="relative z-10 mt-4 md:mt-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">
                Reach the right customers for less
              </h3>
              <p className="text-[#B3B3B3] text-sm md:text-base leading-relaxed">
                Acquire new customers and keep them coming back for more with{' '}
                <span className="text-[#00A37F] font-medium underline underline-offset-2">
                  integrated marketing tools
                </span>{' '}
                and insightful analytics. Track ROI, automate campaigns, and optimize 
                your customer acquisition strategy with data-driven insights.
              </p>
              
              {/* 功能亮点 */}
              <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#00A37F] rounded-full mr-3"></div>
                  <span className="text-sm text-white">Email marketing automation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#00A37F] rounded-full mr-3"></div>
                  <span className="text-sm text-white">Customer segmentation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#00A37F] rounded-full mr-3"></div>
                  <span className="text-sm text-white">ROI tracking dashboard</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#00A37F] rounded-full mr-3"></div>
                  <span className="text-sm text-white">A/B testing tools</span>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧卡片：B2B解决方案 */}
          <div 
            className="relative rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden border border-[#1A2A2A]"
            style={cardGradient}
          >
            {/* 主图像 */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-6 md:mb-8">
              {loading ? (
                <div className="w-full h-full bg-[#1A2A2A] animate-pulse rounded-xl"></div>
              ) : (
                <Image
                  src={images.productUI}
                  alt={images.productUI.alt || "B2B wholesale product catalog interface with pricing and inventory management"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
              )}
            </div>

            {/* 内容区域 */}
            <div className="mt-4 md:mt-6">
              <div className="inline-flex items-center bg-[#1E3AFF]/10 text-[#1E3AFF] text-xs md:text-sm font-medium px-3 py-1 rounded-full mb-4">
                <div className="w-2 h-2 bg-[#1E3AFF] rounded-full mr-2"></div>
                B2B Enterprise Solution
              </div>
              
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">
                Unlock new growth with B2B wholesale
              </h3>
              <p className="text-[#B3B3B3] text-sm md:text-base leading-relaxed">
                Create{' '}
                <span className="text-[#00A37F] font-medium underline underline-offset-2">
                  custom experiences for wholesale buyers
                </span>{' '}
                with flexible pricing, volume discounts, and customized payment terms. 
                Scale your business with dedicated B2B portals that streamline ordering 
                and relationship management.
              </p>
              
              {/* B2B功能列表 */}
              <div className="mt-6 md:mt-8 grid grid-cols-1 gap-4">
                <div className="flex items-start p-3 md:p-4 bg-[#0A1414]/50 rounded-lg border border-[#1A2A2A]">
                  <div className="w-8 h-8 bg-[#008060]/20 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <span className="text-[#00A37F] font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Custom Pricing Tiers</h4>
                    <p className="text-[#6B6B6B] text-xs md:text-sm">Set different prices for different customer segments</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 md:p-4 bg-[#0A1414]/50 rounded-lg border border-[#1A2A2A]">
                  <div className="w-8 h-8 bg-[#008060]/20 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <span className="text-[#00A37F] font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Volume Discounts</h4>
                    <p className="text-[#6B6B6B] text-xs md:text-sm">Automatically apply discounts for bulk orders</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 md:p-4 bg-[#0A1414]/50 rounded-lg border border-[#1A2A2A]">
                  <div className="w-8 h-8 bg-[#008060]/20 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <span className="text-[#00A37F] font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Net Payment Terms</h4>
                    <p className="text-[#6B6B6B] text-xs md:text-sm">Offer flexible payment options to trusted partners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA按钮区域 */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 md:gap-6 bg-[#0F1C1C] rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                Ready to find your forever customers?
              </h3>
              <p className="text-[#6B6B6B] text-sm md:text-base">
                Join millions of merchants growing their business with Shopify
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center sm:justify-end">
              <button className="bg-[#008060] hover:bg-[#00A37F] text-white font-medium px-6 md:px-8 py-3 rounded-lg transition-colors duration-300 whitespace-nowrap">
                Start free trial
              </button>
              <button className="bg-transparent border border-[#6B6B6B] hover:border-white text-white font-medium px-6 md:px-8 py-3 rounded-lg transition-colors duration-300">
                Contact sales
              </button>
            </div>
          </div>
          
          {/* 信任徽章 */}
          <div className="mt-8 md:mt-12">
            <p className="text-[#6B6B6B] text-sm mb-4 md:mb-6">Trusted by businesses worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-70">
              <div className="text-white text-lg font-medium">1M+</div>
              <div className="text-[#6FD1A6] text-lg font-medium">Global merchants</div>
              <div className="text-white text-lg font-medium">$1T+</div>
              <div className="text-[#95BF47] text-lg font-medium">Sales processed</div>
              <div className="text-white text-lg font-medium">175+</div>
              <div className="text-[#00A37F] text-lg font-medium">Countries served</div>
            </div>
          </div>
        </div>

        {/* 加载状态 */}
        {loading && (
          <div className="fixed bottom-4 right-4 bg-[#0A1414] border border-[#00A37F] text-white px-4 py-2 rounded-lg text-sm flex items-center">
            <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            Loading images from API...
          </div>
        )}
      </div>
    </section>
  );
}