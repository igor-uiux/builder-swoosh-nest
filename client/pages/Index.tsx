import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  ArrowRight,
  Star,
  Truck,
  Shield,
  Leaf,
  Mail,
  ChevronLeft,
  ChevronRight,
  Heart
} from "lucide-react";
import { cn } from "@/lib/utils";

// Sample product data
const featuredProducts = [
  {
    id: 1,
    name: "Essential White Tee",
    price: 29.99,
    originalPrice: 39.99,
    image: "/api/placeholder/400/500",
    category: "essentials",
    rating: 4.8,
    reviews: 124,
    isNew: false,
    onSale: true
  },
  {
    id: 2,
    name: "Vintage Graphic Tee",
    price: 34.99,
    image: "/api/placeholder/400/500",
    category: "graphic",
    rating: 4.9,
    reviews: 89,
    isNew: true,
    onSale: false
  },
  {
    id: 3,
    name: "Oversized Black Tee",
    price: 39.99,
    image: "/api/placeholder/400/500",
    category: "oversized",
    rating: 4.7,
    reviews: 156,
    isNew: false,
    onSale: false
  },
  {
    id: 4,
    name: "Premium Cotton Polo",
    price: 49.99,
    image: "/api/placeholder/400/500",
    category: "premium",
    rating: 4.9,
    reviews: 203,
    isNew: true,
    onSale: false
  },
  {
    id: 5,
    name: "Minimalist Gray Tee",
    price: 32.99,
    image: "/api/placeholder/400/500",
    category: "essentials",
    rating: 4.6,
    reviews: 78,
    isNew: false,
    onSale: false
  },
  {
    id: 6,
    name: "Bold Typography Tee",
    price: 36.99,
    image: "/api/placeholder/400/500",
    category: "graphic",
    rating: 4.8,
    reviews: 92,
    isNew: false,
    onSale: false
  }
];

// Categories for filtering
const categories = [
  { id: "all", name: "All", count: 120 },
  { id: "men", name: "Men", count: 65 },
  { id: "women", name: "Women", count: 55 },
  { id: "graphic", name: "Graphic", count: 30 },
  { id: "plain", name: "Plain", count: 45 },
  { id: "oversized", name: "Oversized", count: 25 }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "/api/placeholder/60/60",
    text: "Best T-shirts I've ever owned. The quality is incredible and they get softer with every wash!",
    rating: 5,
    verified: true
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    avatar: "/api/placeholder/60/60",
    text: "Love the fit and feel. These tees are my go-to for work and weekend. Highly recommend!",
    rating: 5,
    verified: true
  },
  {
    id: 3,
    name: "Emily Johnson",
    avatar: "/api/placeholder/60/60",
    text: "Sustainable fashion that doesn't compromise on style. ThreadCo is doing it right!",
    rating: 5,
    verified: true
  }
];

function ProductCard({ product }: { product: typeof featuredProducts[0] }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
          )}
          {product.onSale && (
            <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>
          )}
        </div>
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
        >
          <Heart className={cn("h-4 w-4", isLiked ? "fill-red-500 text-red-500" : "text-gray-600")} />
        </button>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button size="sm" className="bg-white text-black hover:bg-gray-100">
            Quick Add
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
          </div>
        </div>
        <CardTitle className="text-base font-medium mb-2">{product.name}</CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <Card className="p-6 h-full">
      <CardContent className="p-0">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
        <div className="flex items-center gap-3">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-sm">{testimonial.name}</p>
            {testimonial.verified && (
              <p className="text-xs text-green-600">Verified Purchase</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1920/800" 
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Premium T-Shirts
              <br />
              <span className="text-gray-300">Built to Last</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-lg">
              Discover our collection of sustainably made, premium quality T-shirts. 
              Comfort meets style in every thread.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-6 py-2 rounded-full font-medium transition-colors",
                  selectedCategory === category.id
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our bestselling T-shirts, loved by thousands of customers worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Truck className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $50. Fast delivery worldwide.</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Organic Cotton</h3>
              <p className="text-gray-600">Sustainably sourced, organic cotton for ultimate comfort.</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">30-day money-back guarantee. We stand behind our quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what real customers think about ThreadCo
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    "transition-opacity duration-300",
                    index === currentTestimonial ? "opacity-100" : "opacity-100 md:opacity-50"
                  )}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentTestimonial((prev) => 
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentTestimonial((prev) => 
                  (prev + 1) % testimonials.length
                )}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="h-12 w-12 mx-auto mb-6 text-gray-400" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay in the Loop
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Be the first to know about new arrivals, exclusive deals, and special promotions. 
            Join our newsletter for 10% off your first order!
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <Button type="submit" className="bg-white text-black hover:bg-gray-100 px-6">
                Subscribe
              </Button>
            </div>
          </form>
          
          <p className="text-sm text-gray-400 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
