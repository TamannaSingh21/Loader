"use client";
import { gsap } from "gsap";
import React, { useRef, useEffect } from "react";
import { words } from '@/data';
import { introAnimation, progressAnimation, collapseWords } from '@/components/animation/animation.js';

// Define the type for the timeline prop
interface LoaderProps {
    timeline: gsap.core.Timeline | null;  // Type for timeline prop
}

const Loader: React.FC<LoaderProps> = ({ timeline }) => {

    const loaderRef = useRef(null);
    const progressRef = useRef(null);
    const progressNumberRef = useRef(null);
    const wordGroupsRef = useRef(null);

    useEffect(() => {
        // Ensure the timeline is available before adding animations
        if (timeline) {
            timeline
                .add(introAnimation(wordGroupsRef))
                .add(progressAnimation(progressRef, progressNumberRef), 0)
                .add(collapseWords(loaderRef), "-=1");
        }
    }, [timeline]);

    return (
        <div className="loader__wrapper">
            <div className="loader__progressWrapper">
                <div className="loader__progress" ref={progressRef}></div>
                <span className="loader__progressNumber" ref={progressNumberRef}>0</span>
            </div>
            <div className="loader" ref={loaderRef}>
                <div className="loader__words">
                    <div className="loader__overlay"></div>
                    <div className="loader__wordsGroup" ref={wordGroupsRef}>
                        {words.map((word, index) => (
                            <span key={index} className="loader__word">
                                {word}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
