
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Quote } from "lucide-react";

const Poetry = () => {
  const [selectedPoem, setSelectedPoem] = useState(0);
  const [selectedQuote, setSelectedQuote] = useState(0);

  const poems = [
    {
      title: "Digital Canvas",
      date: "2024",
      content: `In pixels and vectors we find our voice,
Where creativity meets deliberate choice.
Each stroke of design, each word we craft,
Building brands that will forever last.

The screen becomes our sacred space,
Where stories unfold with digital grace.
In code and color, in type and flow,
We plant the seeds that help brands grow.`
    },
    {
      title: "The Settings",
      date: "2024", 
      content: `Between the lines of who we are,
And who we dream to become,
Lives the space where brands are born—
In whispers first, then songs.

The settings of our story matter:
The light, the mood, the frame.
For identity is not just what we show,
But how we choose to name

The essence that lives beneath
The surface of design.
Here, in this sacred creative space,
Your story becomes mine.`
    },
    {
      title: "Writer's Paradox",
      date: "2023",
      content: `Words are bridges and walls,
They connect and divide,
Build empires of meaning
Where thoughts can hide.

In the silence between letters,
In the space between lines,
Lives the magic of language—
Where your story intertwines

With mine, with theirs,
With voices yet unheard.
We are all authors here,
Writing with more than words.`
    }
  ];

  const quotes = [
    {
      text: "Design is not just what it looks like and feels like. Design is how it works.",
      author: "My Creative Philosophy",
      category: "Design"
    },
    {
      text: "Every brand has a story waiting to be told. My job is to find the right words and visuals to tell it.",
      author: "On Brand Storytelling",
      category: "Branding"
    },
    {
      text: "Creativity is intelligence having fun, but strategy is creativity having purpose.",
      author: "Creative Process",
      category: "Strategy"
    },
    {
      text: "In the intersection of art and commerce, we find the soul of authentic branding.",
      author: "Business & Art",
      category: "Philosophy"
    },
    {
      text: "Words have the power to build empires or tear them down. Choose wisely.",
      author: "On Writing",
      category: "Writing"
    }
  ];

  return (
    <section id="poetry" className="py-20 section-padding bg-muted/30">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Poetry, Prose & Quotes
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Poetry Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center text-foreground">Poetry & Prose</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Poem List */}
              <div className="md:col-span-1">
                <h4 className="text-lg font-medium mb-4 text-foreground/80">Collection</h4>
                <div className="space-y-3">
                  {poems.map((poem, index) => (
                    <Card 
                      key={index}
                      className={`cursor-pointer transition-all duration-300 hover:border-primary/50 ${
                        selectedPoem === index ? 'border-primary bg-primary/5' : 'border-border'
                      }`}
                      onClick={() => setSelectedPoem(index)}
                    >
                      <CardContent className="p-3">
                        <h5 className="font-medium text-sm text-foreground">{poem.title}</h5>
                        <p className="text-xs text-foreground/60 mt-1">{poem.date}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Selected Poem Display */}
              <div className="md:col-span-2">
                <Card className="border-border h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-foreground mb-1">
                        {poems[selectedPoem].title}
                      </h4>
                      <p className="text-primary font-medium text-sm">{poems[selectedPoem].date}</p>
                    </div>
                    
                    <ScrollArea className="h-64">
                      <div className="pr-4">
                        <pre className="whitespace-pre-wrap font-serif text-base leading-relaxed text-foreground/90">
                          {poems[selectedPoem].content}
                        </pre>
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Quotes Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center text-foreground">Quotes & Thoughts</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Quote List */}
              <div className="md:col-span-1">
                <h4 className="text-lg font-medium mb-4 text-foreground/80">Categories</h4>
                <div className="space-y-3">
                  {quotes.map((quote, index) => (
                    <Card 
                      key={index}
                      className={`cursor-pointer transition-all duration-300 hover:border-primary/50 ${
                        selectedQuote === index ? 'border-primary bg-primary/5' : 'border-border'
                      }`}
                      onClick={() => setSelectedQuote(index)}
                    >
                      <CardContent className="p-3">
                        <h5 className="font-medium text-sm text-foreground">{quote.category}</h5>
                        <p className="text-xs text-foreground/60 mt-1 truncate">{quote.text.substring(0, 30)}...</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Selected Quote Display */}
              <div className="md:col-span-2">
                <Card className="border-border h-full">
                  <CardContent className="p-6 flex flex-col justify-center">
                    <div className="text-center">
                      <Quote className="mx-auto mb-4 text-primary w-8 h-8" />
                      <blockquote className="text-lg font-medium text-foreground/90 mb-4 italic leading-relaxed">
                        "{quotes[selectedQuote].text}"
                      </blockquote>
                      <div className="space-y-1">
                        <p className="text-primary font-medium">
                          {quotes[selectedQuote].author}
                        </p>
                        <p className="text-sm text-foreground/60">
                          {quotes[selectedQuote].category}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poetry;
