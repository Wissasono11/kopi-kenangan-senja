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
      <div class="relative p-6">
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
        <div class="text-center mb-6">
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
        <div class="flex gap-3">
          <button class="flex-1 bg-gradient-to-r from-[#b6895b] to-[#d4af37] text-white px-4 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-[#b6895b]/40 transition-all duration-300 transform hover:scale-105">
            Tambah ke Keranjang
          </button>
          <a href="#contact" onclick="closeMenuModal()" class="flex-1 bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 text-white px-4 py-3 rounded-full font-medium hover:bg-[#b6895b]/20 transition-all duration-300 text-center">
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
  }
});
