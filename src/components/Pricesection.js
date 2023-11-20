import React, { useEffect } from 'react'
import '../stylesheets/Pricesection.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Pricesection() {

    useEffect(() => {
        Aos.init();
    }, [])

    const pricingPlans = [
        {
            title: 'Basic Plan',
            price: '$99/month',
            features: [
                'Access to AI-enhanced project planning',
                'Limited support',
                'Project scheduling assistance',
            ],
        },
        {
            title: 'Pro Plan',
            price: '$199/month',
            features: [
                'Full access to AI-driven project management',
                'Priority support',
                'Customizable analytics',
                'Real-time collaboration tools',
            ],
        },
        {
            title: 'Enterprise Plan',
            price: 'Contact us for pricing',
            features: [
                'All Pro Plan features',
                'Dedicated account manager',
                'On-site training sessions',
                'Custom AI model development',
            ],
        },
        {
            title: 'Custom Plan',
            price: 'Custom pricing',
            features: [
                'Tailored AI solutions for your specific needs',
                '24/7 support',
                'Advanced data security measures',
                'Integration with third-party tools',
            ],
        },
        {
            title: 'Special Offer',
            price: '$149/month',
            features: [
                'Access to AI-enhanced project planning and management',
                'Priority support',
                'Real-time collaboration tools',
                'Customizable analytics',
                'Limited-time pricing',
            ],
        },
        {
            title: 'Premium Plan',
            price: '$299/month',
            features: [
                'All Special Offer features',
                'Exclusive access to new AI features',
                'Enhanced data storage and processing limits',
                '24/7 priority support',
            ],
        },
    ];
    return (
        <div className="pricing-page">
            <h2>Choose the Right Plan for Your Construction Projects</h2>
            <div className="pricing-cards">
                {pricingPlans.map((plan, index) => (
                    <div className="pricing-card" data-aos='fade-left' key={index}>
                        <h3>{plan.title}</h3>
                        <p className="price">{plan.price}</p>
                        <ul>
                            {plan.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <button>Select Plan</button>
                    </div>
                ))}
            </div>
        </div>
    )
} 
