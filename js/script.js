// Modern Navbar JavaScript with Performance Optimizations
document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburger = document.querySelector("#hamburger-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  
  // Mobile menu toggle
  hamburger.onclick = (e) => {
    e.stopPropagation();
    navbarNav.classList.toggle("opacity-100");
    navbarNav.classList.toggle("visible");
    navbarNav.classList.toggle("opacity-0");
    navbarNav.classList.toggle("invisible");
  };
  
  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.add("opacity-0");
      navbarNav.classList.add("invisible");
      navbarNav.classList.remove("opacity-100");
      navbarNav.classList.remove("visible");
    }
  });
  
  // Active link management for desktop
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove active class from all links
      navLinks.forEach(l => {
        l.classList.remove('active', 'bg-gradient-to-r', 'from-[#b6895b]', 'to-[#d4af37]');
        l.classList.add('text-gray-300');
      });
      
      // Add active class to clicked link
      this.classList.add('active', 'bg-gradient-to-r', 'from-[#b6895b]', 'to-[#d4af37]');
      this.classList.remove('text-gray-300');
      this.classList.add('text-white');
    });
  });
  
  // Active link management for mobile
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove active classes from all mobile links
      mobileNavLinks.forEach(l => {
        l.classList.remove('bg-gradient-to-r', 'from-[#b6895b]', 'to-[#d4af37]', 'text-white');
        l.classList.add('text-gray-300');
      });
      
      // Add active class to clicked link
      this.classList.add('bg-gradient-to-r', 'from-[#b6895b]', 'to-[#d4af37]', 'text-white');
      this.classList.remove('text-gray-300');
      
      // Close mobile menu after clicking
      setTimeout(() => {
        navbarNav.classList.add("opacity-0");
        navbarNav.classList.add("invisible");
        navbarNav.classList.remove("opacity-100");
        navbarNav.classList.remove("visible");
      }, 200);
    });
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 100; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Navbar background change on scroll with throttling for better performance
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(() => {
        const navbar = document.querySelector('nav > div');
        if (window.scrollY > 50) {
          navbar.classList.add('bg-gray-900/98');
          navbar.classList.remove('bg-gray-900/95');
        } else {
          navbar.classList.add('bg-gray-900/95');
          navbar.classList.remove('bg-gray-900/98');
        }
        scrollTimeout = null;
      }, 10);
    }
  }, { passive: true });
});

// Products Section JavaScript with Performance Optimizations
document.addEventListener('DOMContentLoaded', function() {
  // Product Filter Functionality
  const filterButtons = document.querySelectorAll('.product-filter');
  const productItems = document.querySelectorAll('.product-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active filter button with better performance
      filterButtons.forEach(btn => {
        btn.classList.remove('bg-gradient-to-r', 'from-[#b6895b]', 'to-[#d4af37]', 'text-white', 'active');
        btn.classList.add('bg-gray-800/50', 'text-gray-300');
      });
      
      this.classList.add('bg-gradient-to-r', 'from-[#b6895b]', 'to-[#d4af37]', 'text-white', 'active');
      this.classList.remove('bg-gray-800/50', 'text-gray-300');
      
      // Filter products with optimized performance
      requestAnimationFrame(() => {
        productItems.forEach((item, index) => {
          if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            // Stagger animation for smoother effect
            setTimeout(() => {
              item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, index * 50);
          } else {
            item.style.transition = 'opacity 0.2s ease';
            item.style.opacity = '0';
            setTimeout(() => {
              if (item.style.opacity === '0') {
                item.style.display = 'none';
              }
            }, 200);
          }
        });
      });
    });
  });
});

// Product Modal Functionality with Performance Optimizations
const productData = {
  'arabica-blend': {
    name: 'Arabica Premium Blend',
    price: 'IDR 85K',
    weight: '250g',
    image: 'img/products/arabika.jpg',
    category: 'Biji Kopi Premium',
    description: 'Biji kopi arabica pilihan yang dipetik dari ketinggian 1200-1800 mdpl dengan proses pengolahan yang sempurna. Memiliki karakteristik rasa yang kompleks dengan sentuhan fruity dan floral yang elegan.',
    features: [
      '✓ Single Origin dari perkebunan terpilih',
      '✓ Roasting level Medium untuk balanced flavor',
      '✓ Aroma fruity dengan hint chocolate',
      '✓ Acidity level rendah, cocok untuk semua kalangan',
      '✓ Kemasan kedap udara untuk freshness'
    ],
    brewing: 'Recommended: V60, Chemex, French Press',
    origin: 'Aceh Gayo, Indonesia'
  },
  'robusta-strong': {
    name: 'Robusta Strong',
    price: 'IDR 65K',
    weight: '250g',
    image: 'img/products/robusta.jpg',
    category: 'Biji Kopi Strong',
    description: 'Kopi robusta dengan karakter kuat dan bold, perfect untuk pecinta kopi dengan intensitas tinggi. Menghadirkan body yang full dengan crema yang kental dan bertahan lama.',
    features: [
      '✓ Caffeine content tinggi untuk energi extra',
      '✓ Body yang full dan creamy',
      '✓ Perfect untuk espresso-based drinks',
      '✓ Bitter-sweet balance yang sempurna',
      '✓ Tahan lama di lidah dengan aftertaste yang pleasant'
    ],
    brewing: 'Recommended: Espresso Machine, Moka Pot',
    origin: 'Lampung, Indonesia'
  },
  'v60-dripper': {
    name: 'V60 Dripper Set',
    price: 'IDR 350K',
    weight: 'Complete Set',
    image: 'img/products/dripper-set.jpg',
    category: 'Professional Equipment',
    description: 'Set lengkap V60 dripper untuk manual brewing yang sempurna. Dirancang khusus untuk menghasilkan ekstraksi kopi yang optimal dengan kontrol penuh atas proses brewing.',
    features: [
      '✓ V60 Dripper ceramic grade premium',
      '✓ Server glass 600ml dengan measurement',
      '✓ Paper filter V60 (40 pcs included)',
      '✓ Gooseneck kettle untuk precision pouring',
      '✓ Digital scale dengan timer built-in',
      '✓ Panduan brewing lengkap'
    ],
    brewing: 'Perfect for Pour Over Coffee',
    origin: 'Imported from Japan'
  },
  'french-press': {
    name: 'French Press Premium',
    price: 'IDR 275K',
    weight: '600ml',
    image: 'img/products/french-press.jpg',
    category: 'Professional Equipment',
    description: 'French press berkualitas tinggi dengan material borosilicate glass dan frame stainless steel. Ideal untuk menghasilkan full body coffee dengan ekstraksi sempurna.',
    features: [
      '✓ Borosilicate glass tahan panas tinggi',
      '✓ Stainless steel frame dan plunger',
      '✓ Double-wall insulation',
      '✓ Easy-clean design',
      '✓ Capacity 600ml (4-5 cups)',
      '✓ Heat-resistant handle'
    ],
    brewing: 'Full Immersion Brewing Method',
    origin: 'European Design'
  },
  'coffee-mug': {
    name: 'Kenangan Senja Mug',
    price: 'IDR 125K',
    weight: '350ml',
    image: 'img/products/mug.jpg',
    category: 'Limited Edition Merchandise',
    description: 'Mug eksklusif dengan logo Kenangan Senja yang elegan. Terbuat dari ceramic berkualitas tinggi dengan finishing matt yang premium dan comfortable grip.',
    features: [
      '✓ Premium ceramic material',
      '✓ Matt finish dengan texture yang nyaman',
      '✓ Logo embossed Kenangan Senja',
      '✓ Microwave dan dishwasher safe',
      '✓ Ergonomic handle design',
      '✓ Limited edition - Collectible item'
    ],
    brewing: 'Perfect for any hot beverages',
    origin: 'Handcrafted in Indonesia'
  },
  'tote-bag': {
    name: 'Canvas Tote Bag',
    price: 'IDR 185K',
    weight: 'Eco-friendly',
    image: 'img/products/totebag.jpg',
    category: 'Sustainable Merchandise',
    description: 'Tas kanvas premium dengan desain minimalis yang versatile. Terbuat dari 100% organic cotton dengan printing ramah lingkungan.',
    features: [
      '✓ 100% Organic cotton canvas',
      '✓ Eco-friendly water-based printing',
      '✓ Strong reinforced stitching',
      '✓ Large capacity untuk daily essentials',
      '✓ Foldable dan lightweight',
      '✓ Minimalist design cocok untuk berbagai outfit'
    ],
    brewing: 'Perfect companion for coffee runs',
    origin: 'Sustainably made in Indonesia'
  },
  'starter-set': {
    name: 'Coffee Starter Set',
    price: 'IDR 450K',
    weight: '6 Items',
    image: 'img/products/coffee-set.jpg',
    category: 'Best Value Gift Set',
    description: 'Paket lengkap untuk pemula yang ingin memulai journey manual brewing. Berisi semua essential items dengan panduan brewing yang detail.',
    features: [
      '✓ V60 Dripper plastic (beginners friendly)',
      '✓ Server glass 360ml',
      '✓ Paper filters V60 (20 pcs)',
      '✓ Coffee beans 250g (your choice)',
      '✓ Kenangan Senja mug',
      '✓ Detailed brewing guide booklet'
    ],
    brewing: 'Complete starter package',
    origin: 'Curated by Kenangan Senja'
  },
  'premium-gift': {
    name: 'Premium Gift Box',
    price: 'IDR 750K',
    weight: 'Luxury Pack',
    image: 'img/products/coffee-pack.jpg',
    category: 'Exclusive Gift Set',
    description: 'Gift box mewah dengan koleksi produk premium dalam packaging yang elegan. Perfect untuk corporate gift atau special occasions.',
    features: [
      '✓ Premium coffee beans selection (2 x 250g)',
      '✓ V60 ceramic dripper set',
      '✓ French press 350ml',
      '✓ Kenangan Senja mug premium',
      '✓ Canvas tote bag',
      '✓ Luxury gift box packaging dengan ribbon'
    ],
    brewing: 'Ultimate coffee experience',
    origin: 'Exclusively curated luxury collection'
  }
};

// Modal performance optimization
let isModalOpening = false;

function openProductModal(productId) {
  // Prevent rapid modal openings
  if (isModalOpening) return;
  isModalOpening = true;
  
  const modal = document.getElementById('productModal');
  const modalContent = document.getElementById('modalContent');
  const product = productData[productId];
  
  if (!product) {
    isModalOpening = false;
    return;
  }
  
  // Use requestAnimationFrame for smoother rendering
  requestAnimationFrame(() => {
    modalContent.innerHTML = `
      <div class="relative">
        <!-- Close Button -->
        <button onclick="closeProductModal()" class="absolute top-6 right-6 z-10 w-10 h-10 bg-red-500/20 hover:bg-red-500/40 backdrop-blur-sm border border-red-500/30 rounded-full flex items-center justify-center text-red-400 hover:text-red-300 transition-all duration-300">
          <i data-feather="x" class="w-5 h-5"></i>
        </button>
        
        <!-- Modal Content -->
        <div class="flex flex-col lg:flex-row gap-8 p-8">
          <!-- Product Image -->
          <div class="lg:w-1/2">
            <img src="${product.image}" alt="${product.name}" class="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl">
            <div class="mt-4 text-center">
              <span class="inline-block bg-[#b6895b]/20 backdrop-blur-sm border border-[#b6895b]/30 text-[#d4af37] px-4 py-2 rounded-full text-sm font-medium">
                ${product.category}
              </span>
            </div>
          </div>
          
          <!-- Product Details -->
          <div class="lg:w-1/2 space-y-6">
            <div>
              <h2 class="text-3xl font-bold text-transparent bg-gradient-to-r from-[#b6895b] to-[#d4af37] bg-clip-text mb-2">
                ${product.name}
              </h2>
              <div class="flex items-center justify-between mb-4">
                <span class="text-2xl font-bold text-white">${product.price}</span>
                <span class="text-gray-400">${product.weight}</span>
              </div>
            </div>
            
            <!-- Description -->
            <div>
              <h3 class="text-lg font-semibold text-white mb-3">Deskripsi Produk</h3>
              <p class="text-gray-300 leading-relaxed text-justify">
                ${product.description}
              </p>
            </div>
            
            <!-- Features -->
            <div>
              <h3 class="text-lg font-semibold text-white mb-3">Fitur & Spesifikasi</h3>
              <ul class="space-y-2 text-gray-300">
                ${product.features.map(feature => `<li class="text-sm">${feature}</li>`).join('')}
              </ul>
            </div>
            
            <!-- Additional Info -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-700/50">
              <div>
                <h4 class="font-semibold text-[#d4af37] mb-1">Brewing Method</h4>
                <p class="text-sm text-gray-400">${product.brewing}</p>
              </div>
              <div>
                <h4 class="font-semibold text-[#d4af37] mb-1">Origin</h4>
                <p class="text-sm text-gray-400">${product.origin}</p>
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 pt-6">
              <button class="bg-gradient-to-r from-[#b6895b] to-[#d4af37] text-white px-4 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-[#b6895b]/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <i data-feather="shopping-cart" class="w-5 h-5 mr-3"></i>
                Tambah ke Keranjang
              </button>
              <a href="#contact" onclick="closeProductModal()" class="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 text-white px-4 py-4 rounded-full font-semibold hover:bg-[#b6895b]/20 transition-all duration-300 flex items-center justify-center">
                <i data-feather="message-circle" class="w-5 h-5 mr-3"></i>
                Tanya Detail
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Reinitialize Feather icons for the modal content
    feather.replace();
    
    // Show modal with animation
    modal.classList.remove('opacity-0', 'invisible');
    modal.classList.add('opacity-100', 'visible');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    
    // Reset opening flag after animation
    setTimeout(() => {
      isModalOpening = false;
    }, 300);
  });
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  const modalContent = document.getElementById('modalContent');
  
  // Hide modal with animation
  modal.classList.remove('opacity-100', 'visible');
  modal.classList.add('opacity-0', 'invisible');
  modalContent.classList.remove('scale-100');
  modalContent.classList.add('scale-95');
  
  // Restore background scrolling
  document.body.style.overflow = 'auto';
  
  // Reset modal opening flag
  isModalOpening = false;
}

// Close modal when clicking outside
document.getElementById('productModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeProductModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeProductModal();
  }
});

// Menu Modal Functionality - Simplified for Better Performance
const menuData = {
  'espresso': {
    name: 'Espresso',
    price: 'IDR 15K',
    rating: '4.8',
    image: 'img/menu/1.jpg',
    category: 'Premium Single Shot',
    description: 'Espresso klasik dengan teknik ekstraksi sempurna menggunakan biji kopi arabica pilihan. Menghasilkan crema golden yang thick dengan body rich dan aroma intense.',
    details: {
      volume: '30ml',
      caffeine: '65mg'
    }
  },
  'cappuccino': {
    name: 'Cappuccino',
    price: 'IDR 13K',
    rating: '4.7',
    image: 'img/menu/2.jpg',
    category: 'Classic Milk Coffee',
    description: 'Perpaduan sempurna antara espresso kuat dengan steamed milk creamy dan milk foam lembut. Ratio seimbang memberikan pengalaman rasa yang harmonis.',
    details: {
      volume: '150ml',
      caffeine: '65mg'
    }
  },
  'latte': {
    name: 'Latte',
    price: 'IDR 14K',
    rating: '4.9',
    image: 'img/menu/3.jpg',
    category: 'Smooth Milk Coffee',
    description: 'Kopi latte dengan single shot espresso yang di-blend dengan steamed milk smooth dan creamy. Finished dengan thin layer milk foam dan beautiful latte art.',
    details: {
      volume: '200ml',
      caffeine: '65mg'
    }
  },
  'macchiato': {
    name: 'Macchiato',
    price: 'IDR 25K',
    rating: '4.6',
    image: 'img/menu/4.jpg',
    category: 'Premium Specialty',
    description: 'Espresso macchiato premium dengan double shot espresso yang di-mark dengan foam milk light. Memberikan intensitas kopi kuat dengan sentuhan milk subtle.',
    details: {
      volume: '60ml',
      caffeine: '130mg'
    }
  },
  'coldbrew': {
    name: 'Cold Brew',
    price: 'IDR 20K',
    rating: '4.5',
    image: 'img/menu/5.jpg',
    category: 'Cold Specialty',
    description: 'Cold brew coffee yang di-ekstraksi selama 24 jam dengan metode cold water extraction. Menghasilkan kopi dingin yang smooth, less acidic, dan naturally sweet.',
    details: {
      volume: '250ml',
      caffeine: '200mg'
    }
  },
  'affogato': {
    name: 'Affogato',
    price: 'IDR 18K',
    rating: '4.8',
    image: 'img/menu/6.jpg',
    category: 'Special Dessert Coffee',
    description: 'Dessert coffee unik dengan vanilla ice cream premium yang di-drizzle dengan hot espresso shot. Kontras hot dan cold menciptakan pengalaman rasa memorable.',
    details: {
      volume: '120ml + 1 scoop',
      caffeine: '65mg'
    }
  }
};

let isMenuModalOpening = false;

function openMenuModal(menuId) {
  // Prevent rapid modal openings
  if (isMenuModalOpening) return;
  isMenuModalOpening = true;
  
  const modal = document.getElementById('menuModal');
  const modalContent = document.getElementById('menuModalContent');
  const menu = menuData[menuId];
  
  if (!menu) {
    isMenuModalOpening = false;
    return;
  }
  
  // Use requestAnimationFrame for smoother rendering
  requestAnimationFrame(() => {
    modalContent.innerHTML = `
      <div class="relative py-6 flex flex-col items-center">
        <!-- Close Button -->
        <button onclick="closeMenuModal()" class="absolute top-4 right-4 z-10 w-8 h-8 bg-red-500/20 hover:bg-red-500/40 backdrop-blur-sm border border-red-500/30 rounded-full flex items-center justify-center text-red-400 hover:text-red-300 transition-all duration-300">
          <i data-feather="x" class="w-4 h-4"></i>
        </button>
        
        <!-- Menu Image -->
        <div class="text-center mb-4">
          <img src="${menu.image}" alt="${menu.name}" class="w-24 h-24 object-cover rounded-full mx-auto border-4 border-[#b6895b]/30 shadow-lg">
        </div>
        
        <!-- Menu Info -->
        <div class="text-center mb-4">
          <h2 class="text-2xl font-bold text-transparent bg-gradient-to-r from-[#b6895b] to-[#d4af37] bg-clip-text mb-2">
            ${menu.name}
          </h2>
          <div class="flex items-center justify-center gap-4 mb-3">
            <span class="text-xl font-bold text-white">${menu.price}</span>
            <div class="flex items-center text-yellow-400">
              <i data-feather="star" class="w-4 h-4 fill-current mr-1"></i>
              <span class="text-sm font-medium">${menu.rating}</span>
            </div>
          </div>
          <span class="inline-block bg-[#b6895b]/20 backdrop-blur-sm border border-[#b6895b]/30 text-[#d4af37] px-3 py-1 rounded-full text-sm">
            ${menu.category}
          </span>
        </div>
        
        <!-- Simple Description -->
        <div class="text-center mb-6 p-4">
          <p class="text-gray-300 text-sm leading-relaxed">
            ${menu.description}
          </p>
        </div>
        
        <!-- Key Details -->
        <div class="grid grid-cols-2 gap-3 mb-6">
          <div class="text-center">
            <div class="text-[#d4af37] text-xs font-medium mb-1">Volume</div>
            <div class="text-white text-sm">${menu.details.volume}</div>
          </div>
          <div class="text-center">
            <div class="text-[#d4af37] text-xs font-medium mb-1">Caffeine</div>
            <div class="text-white text-sm">${menu.details.caffeine}</div>
          </div>
        </div>
        
        <!-- Action Buttons -->
        <div class="flex flex-row gap-x-3">
          <a class="w-fit bg-gradient-to-r from-[#b6895b] to-[#d4af37] text-white px-4 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-[#b6895b]/40 transition-all duration-300 transform hover:scale-105 text-center">
            Tambah ke Keranjang
          </a>
          <a href="#contact" onclick="closeMenuModal()" class="w-fit bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 text-white px-4 py-3 rounded-full font-medium hover:bg-[#b6895b]/20 transition-all duration-300 text-center">
            Pesan Sekarang
          </a>  
        </div>
      </div>
    `;
    
    // Reinitialize Feather icons for the modal content
    feather.replace();
    
    // Show modal with animation
    modal.classList.remove('opacity-0', 'invisible');
    modal.classList.add('opacity-100', 'visible');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    
    // Reset opening flag after animation
    setTimeout(() => {
      isMenuModalOpening = false;
    }, 300);
  });
}

function closeMenuModal() {
  const modal = document.getElementById('menuModal');
  const modalContent = document.getElementById('menuModalContent');
  
  // Hide modal with animation
  modal.classList.remove('opacity-100', 'visible');
  modal.classList.add('opacity-0', 'invisible');
  modalContent.classList.remove('scale-100');
  modalContent.classList.add('scale-95');
  
  // Restore background scrolling
  document.body.style.overflow = 'auto';
  
  // Reset modal opening flag
  isMenuModalOpening = false;
}

// Close menu modal when clicking outside
document.getElementById('menuModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeMenuModal();
  }
});

// Close menu modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeMenuModal();
    closeSearchModal();
  }
});

// Search data - Menu items
const menuItems = [
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Premium single shot espresso dengan crema sempurna',
    price: 'IDR 15K',
    image: 'img/menu/1.jpg',
    rating: 4.8,
    category: 'menu',
    type: 'coffee',
    keywords: ['espresso', 'kopi', 'coffee', 'premium', 'single shot', 'crema']
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Espresso dengan susu steamed dan foam yang lembut',
    price: 'IDR 13K',
    image: 'img/menu/2.jpg',
    rating: 4.7,
    category: 'menu',
    type: 'coffee',
    keywords: ['cappuccino', 'kopi', 'coffee', 'susu', 'milk', 'foam', 'steamed']
  },
  {
    id: 'latte',
    name: 'Latte',
    description: 'Espresso dengan steamed milk dan latte art yang indah',
    price: 'IDR 14K',
    image: 'img/menu/3.jpg',
    rating: 4.9,
    category: 'menu',
    type: 'coffee',
    keywords: ['latte', 'kopi', 'coffee', 'susu', 'milk', 'art', 'steamed']
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    description: 'Espresso dengan sentuhan susu foam yang premium',
    price: 'IDR 25K',
    image: 'img/menu/4.jpg',
    rating: 4.6,
    category: 'menu',
    type: 'coffee',
    keywords: ['macchiato', 'kopi', 'coffee', 'foam', 'premium', 'espresso']
  },
  {
    id: 'coldbrew',
    name: 'Cold Brew',
    description: 'Kopi dingin dengan ekstraksi 24 jam yang smooth',
    price: 'IDR 20K',
    image: 'img/menu/5.jpg',
    rating: 4.5,
    category: 'menu',
    type: 'coffee',
    keywords: ['cold brew', 'kopi dingin', 'dingin', 'cold', 'ekstraksi', 'smooth', '24 jam']
  },
  {
    id: 'affogato',
    name: 'Affogato',
    description: 'Es krim vanilla yang disiram espresso panas',
    price: 'IDR 18K',
    image: 'img/menu/6.jpg',
    rating: 4.8,
    category: 'menu',
    type: 'dessert',
    keywords: ['affogato', 'es krim', 'vanilla', 'espresso', 'dessert', 'panas', 'ice cream']
  }
];

// Search data - Product items
const productItems = [
  {
    id: 'arabica-blend',
    name: 'Arabica Premium Blend',
    description: 'Biji kopi arabica pilihan dengan cita rasa kompleks',
    price: 'IDR 85K',
    image: 'img/products/arabika.jpg',
    rating: 4.9,
    category: 'products',
    type: 'coffee-beans',
    keywords: ['arabica', 'premium', 'blend', 'biji kopi', 'kompleks', 'pilihan', 'arabika']
  },
  {
    id: 'robusta-strong',
    name: 'Robusta Strong',
    description: 'Kopi robusta dengan karakter kuat dan bold',
    price: 'IDR 65K',
    image: 'img/products/robusta.jpg',
    rating: 4.7,
    category: 'products',
    type: 'coffee-beans',
    keywords: ['robusta', 'strong', 'kuat', 'bold', 'biji kopi', 'karakter']
  },
  {
    id: 'v60-dripper',
    name: 'V60 Dripper Set',
    description: 'Set lengkap untuk manual brewing yang sempurna',
    price: 'IDR 350K',
    image: 'img/products/dripper-set.jpg',
    rating: 4.8,
    category: 'products',
    type: 'equipment',
    keywords: ['v60', 'dripper', 'set', 'brewing', 'manual', 'alat', 'equipment', 'lengkap', 'sempurna']
  },
  {
    id: 'french-press',
    name: 'French Press Premium',
    description: 'French press berkualitas tinggi untuk full body coffee',
    price: 'IDR 275K',
    image: 'img/products/french-press.jpg',
    rating: 4.6,
    category: 'products',
    type: 'equipment',
    keywords: ['french press', 'premium', 'berkualitas tinggi', 'full body', 'coffee', 'alat', 'equipment']
  },
  {
    id: 'coffee-mug',
    name: 'Kenangan Senja Mug',
    description: 'Mug eksklusif dengan logo Kenangan Senja',
    price: 'IDR 125K',
    image: 'img/products/mug.jpg',
    rating: 4.5,
    category: 'products',
    type: 'merchandise',
    keywords: ['mug', 'kenangan senja', 'eksklusif', 'logo', 'merchandise']
  },
  {
    id: 'tote-bag',
    name: 'Canvas Tote Bag',
    description: 'Tas kanvas premium dengan desain minimalis',
    price: 'IDR 185K',
    image: 'img/products/totebag.jpg',
    rating: 4.4,
    category: 'products',
    type: 'merchandise',
    keywords: ['tote bag', 'canvas', 'tas kanvas', 'premium', 'desain minimalis', 'merchandise']
  },
  {
    id: 'starter-set',
    name: 'Coffee Starter Set',
    description: 'Paket lengkap untuk pemula kopi manual brewing',
    price: 'IDR 450K',
    image: 'img/products/coffee-set.jpg',
    rating: 4.9,
    category: 'products',
    type: 'gift-sets',
    keywords: ['starter set', 'coffee set', 'paket lengkap', 'pemula', 'manual brewing', 'gift sets']
  },
  {
    id: 'premium-gift',
    name: 'Premium Gift Box',
    description: 'Gift box mewah dengan koleksi produk premium',
    price: 'IDR 750K',
    image: 'img/products/coffee-pack.jpg',
    rating: 4.8,
    category: 'products',
    type: 'gift-sets',
    keywords: ['gift box', 'premium', 'mewah', 'koleksi produk', 'hadiah', 'gift sets']
  }
];

// Search functionality
let searchModal, searchInput, searchResults, noResults;
let currentSearchCategory = 'all';
let searchTimeout;

// Initialize search functionality
document.addEventListener('DOMContentLoaded', function() {
  searchModal = document.getElementById('searchModal');
  searchInput = document.getElementById('searchInput');
  searchResults = document.getElementById('searchResults');
  noResults = document.getElementById('noResults');
  
  // Search input event listener
  searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      performSearch(this.value.trim());
    }, 300); // Debounce search
  });
  
  // Search category filters
  const categoryButtons = document.querySelectorAll('.search-category');
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active category
      categoryButtons.forEach(btn => {
        btn.classList.remove('active', 'bg-gradient-to-r', 'from-[#b6895b]', 'to-[#d4af37]', 'text-white');
        btn.classList.add('bg-gray-700/30', 'border', 'border-gray-600/30', 'text-gray-300');
      });
      
      this.classList.add('active', 'bg-gradient-to-r', 'from-[#b6895b]', 'to-[#d4af37]', 'text-white');
      this.classList.remove('bg-gray-700/30', 'border', 'border-gray-600/30', 'text-gray-300');
      
      currentSearchCategory = this.dataset.category;
      performSearch(searchInput.value.trim());
    });
  });
  
  // Search icon click handlers
  const searchIcons = document.querySelectorAll('#search, #mobile-search');
  searchIcons.forEach(icon => {
    icon.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Close mobile menu if open
      const navbarNav = document.querySelector(".navbar-nav");
      if (navbarNav && navbarNav.classList.contains("opacity-100")) {
        navbarNav.classList.add("opacity-0");
        navbarNav.classList.add("invisible");
        navbarNav.classList.remove("opacity-100");
        navbarNav.classList.remove("visible");
      }
      
      // Open search modal
      openSearchModal();
    });
  });
});

// Open search modal
function openSearchModal() {
  searchModal.classList.remove('opacity-0', 'invisible');
  searchModal.classList.add('opacity-100', 'visible');
  
  const modalContent = searchModal.querySelector('.bg-gradient-to-br');
  modalContent.classList.remove('scale-95');
  modalContent.classList.add('scale-100');
  
  // Focus on search input
  setTimeout(() => {
    searchInput.focus();
  }, 300);
  
  // Prevent background scrolling
  document.body.style.overflow = 'hidden';
  
  // Show all items initially and ensure search results are visible
  performSearch('');
  
  // Make sure search results are visible from the start
  if (searchResults) {
    searchResults.classList.remove('opacity-0', 'invisible');
    searchResults.classList.add('opacity-100', 'visible');
  }
  
  // Hide no results message initially
  if (noResults) {
    noResults.classList.remove('opacity-100', 'visible');
    noResults.classList.add('opacity-0', 'invisible');
  }
}

// Close search modal
function closeSearchModal() {
  searchModal.classList.remove('opacity-100', 'visible');
  searchModal.classList.add('opacity-0', 'invisible');
  
  const modalContent = searchModal.querySelector('.bg-gradient-to-br');
  modalContent.classList.remove('scale-100');
  modalContent.classList.add('scale-95');
  
  // Clear search
  searchInput.value = '';
  
  // Restore background scrolling
  document.body.style.overflow = 'auto';
}

// Close search modal when clicking outside
searchModal?.addEventListener('click', function(e) {
  if (e.target === this) {
    closeSearchModal();
  }
});

// Perform search
function performSearch(query) {
  const allItems = [...menuItems, ...productItems];
  let filteredItems = [];
  
  if (query === '') {
    // Show all items if no search query
    filteredItems = allItems;
  } else {
    // Filter based on search query
    filteredItems = allItems.filter(item => {
      const searchText = query.toLowerCase();
      return (
        item.name.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(searchText))
      );
    });
  }
  
  // Filter by category
  if (currentSearchCategory !== 'all') {
    filteredItems = filteredItems.filter(item => item.category === currentSearchCategory);
  }
  
  // Display results
  displaySearchResults(filteredItems);
}

// Display search results
function displaySearchResults(items) {
  const menuResultsGrid = document.getElementById('menuResultsGrid');
  const productResultsGrid = document.getElementById('productResultsGrid');
  const menuResultsSection = document.getElementById('menuResults');
  const productResultsSection = document.getElementById('productResults');
  
  // Clear previous results
  menuResultsGrid.innerHTML = '';
  productResultsGrid.innerHTML = '';
  
  // Separate items by category
  const menuResults = items.filter(item => item.category === 'menu');
  const productResults = items.filter(item => item.category === 'products');
  
  // Show/hide sections based on results
  menuResultsSection.style.display = menuResults.length > 0 ? 'block' : 'none';
  productResultsSection.style.display = productResults.length > 0 ? 'block' : 'none';
  
  // Display menu results
  menuResults.forEach(item => {
    const itemElement = createSearchResultItem(item);
    menuResultsGrid.appendChild(itemElement);
  });
  
  // Display product results
  productResults.forEach(item => {
    const itemElement = createSearchResultItem(item);
    productResultsGrid.appendChild(itemElement);
  });
  
  // Show/hide no results message
  if (items.length === 0) {
    noResults.classList.remove('opacity-0', 'invisible');
    noResults.classList.add('opacity-100', 'visible');
    searchResults.classList.add('opacity-0', 'invisible');
    searchResults.classList.remove('opacity-100', 'visible');
  } else {
    noResults.classList.remove('opacity-100', 'visible');
    noResults.classList.add('opacity-0', 'invisible');
    searchResults.classList.remove('opacity-0', 'invisible');
    searchResults.classList.add('opacity-100', 'visible');
  }
  
  // Reinitialize Feather icons for new elements
  if (typeof feather !== 'undefined') {
    feather.replace();
  }
}

// Create search result item
function createSearchResultItem(item) {
  const div = document.createElement('div');
  div.className = 'search-result-item group bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm p-3 rounded-xl border border-gray-600/30 hover:border-[#b6895b]/50 transition-all duration-300 cursor-pointer';
  
  div.innerHTML = `
    <div class="flex items-start space-x-3">
      <div class="relative w-16 h-16 flex-shrink-0">
        <img src="${item.image}" alt="${item.name}" 
          class="w-full h-full object-cover rounded-lg border border-gray-600/30 group-hover:border-[#b6895b]/50 transition-colors duration-300" />
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
      </div>
      <div class="flex-1 min-w-0">
        <h4 class="text-base font-semibold mb-1">
          <span class="text-transparent bg-gradient-to-r from-[#b6895b] to-[#d4af37] bg-clip-text">${item.name}</span>
        </h4>
        <p class="text-xs text-gray-400 mb-2 line-clamp-2">${item.description}</p>
        <div class="flex items-center justify-between">
          <span class="text-white font-bold text-sm">${item.price}</span>
          <div class="flex items-center text-yellow-400 text-xs">
            <i data-feather="star" class="w-3 h-3 fill-current mr-1"></i>
            <span>${item.rating}</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Add click handler
  div.addEventListener('click', function() {
    closeSearchModal();
    if (item.category === 'menu') {
      openMenuModal(item.id);
    } else {
      openProductModal(item.id);
    }
  });
  
  return div;
}
