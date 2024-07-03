const priceId = process.env.NEXT_STRIPE_API_ID;

const pricingOptions = [
    {
        id: 1,
        name: 'Free',
        cost: 0,
        email: 'medalladachris100@gmail.com', // Added email for the free plan
        offering: [
            { value: "✔ Create 3 Free Mock Interview" },
            { value: "✔ Unlimited Retake Interview" },
            { value: "❌ Practice Question" },
            { value: "❌ Email Support" },
        ]
    },
    {
        id: 2,
        name: 'Monthly',
        cost: 500,
        paymentLink: 'https://buy.stripe.com/test_fZebL26Kw4yh1QA9AA',
        priceId: priceId,
        offering: [
            { value: "✔ Create 3 Free Mock Interview" },
            { value: "✔ Unlimited Retake Interview" },
            { value: "✔ Practice Question" },
            { value: "✔ Email Support" },
        ]
    }
];

export default pricingOptions;
