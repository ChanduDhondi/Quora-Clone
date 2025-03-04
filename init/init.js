let data = [
    {
        title: "How Can I Cultivate a Growth Mindset in 2025?",
        description: "Adopting a growth mindset can dramatically impact your personal and professional development. In this post, I’ll discuss practical steps you can take to shift your mindset and thrive in 2025."
    },
    {
        title: "What Are the Key Traits of Highly Successful Entrepreneurs?",
        description: "Success in entrepreneurship isn’t just about hard work. It’s about having the right mindset and traits. I’ll break down the key qualities that separate successful entrepreneurs from the rest."
    },
    {
        title: "How Do You Stay Motivated to Keep Working Towards Long-Term Goals?",
        description: "Working on long-term goals can be difficult when immediate rewards are scarce. Here are some proven strategies to stay motivated and focused throughout your journey."
    },
    {
        title: "What Are the Best Productivity Hacks for Remote Workers in 2025?",
        description: "Remote work is here to stay, but it comes with its own set of challenges. In this post, I’ll share productivity tips and tools to help you stay on top of your tasks and avoid distractions."
    },
    {
        title: "Is It Better to Specialize or Be a Generalist in Your Career?",
        description: "Deciding whether to specialize in one area or diversify your skill set can shape your career. I’ll explore the pros and cons of each approach and how to decide what works best for you."
    },
    {
        title: "What Are the Most Effective Ways to Overcome Imposter Syndrome?",
        description: "Imposter syndrome can hold you back from reaching your full potential. Here are practical techniques to overcome self-doubt and build confidence in your abilities."
    },
    {
        title: "What Are the Essential Skills You Need to Develop for the Future of Work?",
        description: "As technology continues to evolve, so must our skill sets. I’ll share the key skills that will help you stay competitive and adaptable in the rapidly changing job market."
    },
    {
        title: "How Can You Build Strong Relationships in Your Personal and Professional Life?",
        description: "Building and maintaining relationships is essential for both personal happiness and professional success. In this post, I’ll discuss strategies to nurture meaningful connections."
    },
    {
        title: "What Are the Key Differences Between Leadership and Management?",
        description: "Leadership and management are often used interchangeably, but they require different skill sets. I’ll highlight the key differences and why it’s important to understand both roles."
    },
    {
        title: "How Can I Stay Productive While Working on Multiple Projects?",
        description: "Juggling multiple projects can be overwhelming. Here are some tips and strategies to help you stay organized, focused, and productive when managing competing priorities."
    }
]

const mongoose = require('mongoose');
const Post = require('../models/post.js');

main().then(result => console.log(result)).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/quora');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

data = data.map((obj)=> ({...obj, author: '678be1ec352decceb6fbe5bf'}));

async function initalizeDB(data){
    await Post.insertMany(data);
}

// initalizeDB(data)

console.log(data)