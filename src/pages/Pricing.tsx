
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Free Trial",
    price: "Free",
    period: "",
    description: "Perfect for trying out our AI services",
    features: [
      "3 free generations",
      "Basic image enhancement",
      "Standard resolution",
      "Community support",
      "No credit card required"
    ],
    limitations: [
      "Limited to 3 uses total",
      "Watermarked outputs",
      "Standard quality only"
    ],
    icon: Star,
    color: "gray",
    buttonText: "Start Free Trial",
    popular: false
  },
  {
    name: "Starter",
    price: "$9.99",
    period: "/month",
    description: "Great for individuals and small projects",
    features: [
      "50 generations per month",
      "All AI services access",
      "High-resolution outputs",
      "No watermarks",
      "Email support",
      "Download history"
    ],
    limitations: [],
    icon: Zap,
    color: "blue",
    buttonText: "Get Started",
    popular: true
  },
  {
    name: "Professional",
    price: "$29.99",
    period: "/month",
    description: "Perfect for professionals and businesses",
    features: [
      "200 generations per month",
      "Priority processing",
      "4K resolution outputs",
      "Advanced AI models",
      "Priority support",
      "API access",
      "Bulk processing",
      "Custom branding"
    ],
    limitations: [],
    icon: Crown,
    color: "purple",
    buttonText: "Go Professional",
    popular: false
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited generations",
      "Dedicated infrastructure",
      "Custom AI model training",
      "White-label solutions",
      "24/7 phone support",
      "Custom integrations",
      "SLA guarantees",
      "Team management"
    ],
    limitations: [],
    icon: Crown,
    color: "gold",
    buttonText: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <Navbar />
      
      <div className="pt-20 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your AI-powered creative needs. Start free, upgrade when you're ready.
            </p>
            <div className="inline-flex items-center bg-slate-800/50 rounded-full p-1 border border-slate-700">
              <Button variant="ghost" className="rounded-full text-blue-400 bg-blue-600/20">
                Monthly
              </Button>
              <Button variant="ghost" className="rounded-full text-gray-400 hover:text-white">
                Yearly (Save 20%)
              </Button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-slate-900/50 border-blue-600/20 hover:border-blue-600/50 transition-all duration-300 backdrop-blur-sm ${
                  plan.popular ? 'ring-2 ring-blue-600/50 shadow-lg shadow-blue-600/10' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    plan.color === 'blue' ? 'bg-blue-600/20' :
                    plan.color === 'purple' ? 'bg-purple-600/20' :
                    plan.color === 'gold' ? 'bg-yellow-600/20' :
                    'bg-gray-600/20'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${
                      plan.color === 'blue' ? 'text-blue-400' :
                      plan.color === 'purple' ? 'text-purple-400' :
                      plan.color === 'gold' ? 'text-yellow-400' :
                      'text-gray-400'
                    }`} />
                  </div>
                  <CardTitle className="text-white text-xl">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <Link to={plan.name === "Enterprise" ? "/contact" : "/signup"}>
                    <Button 
                      className={`w-full mb-6 ${
                        plan.popular 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white text-sm">What's included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-slate-700">
                        <h4 className="font-semibold text-gray-400 text-sm mb-2">Limitations:</h4>
                        {plan.limitations.map((limitation, limitIndex) => (
                          <div key={limitIndex} className="flex items-center text-sm">
                            <div className="w-4 h-4 mr-3 flex-shrink-0">
                              <div className="w-1 h-1 bg-gray-500 rounded-full mx-auto"></div>
                            </div>
                            <span className="text-gray-500">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Can I change plans anytime?
                  </h3>
                  <p className="text-gray-400">
                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    What happens after my free trial?
                  </h3>
                  <p className="text-gray-400">
                    After 3 free uses, you'll need to sign up for a paid plan to continue using our services.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Do unused generations roll over?
                  </h3>
                  <p className="text-gray-400">
                    Unused generations don't roll over to the next month, but we offer flexible plans to match your usage.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Is there a refund policy?
                  </h3>
                  <p className="text-gray-400">
                    We offer a 30-day money-back guarantee for all paid plans. No questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
