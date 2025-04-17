import React from "react";

function TrainersSection() {
    const trainers = [
        {
            name: "John Doe",
            role: "Strength & Conditioning",
            image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
         
            experience: "10+ years of experience in strength training and nutrition coaching.",
            social: {
                instagram: "#",
                twitter: "#",
                linkedin: "#"
            }
        },
        {
            name: "Sarah Johnson",
            role: "Yoga & Flexibility Expert",
            
            image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            
            experience: "Certified yoga instructor with 8+ years of experience in mindfulness and flexibility training.",
            social: {
                instagram: "#",
                facebook: "#",
                youtube: "#"
            }
        },
        {
            name: "Mike Wilson",
            role: "CrossFit & HIIT Specialist",
            image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            experience: "CrossFit Level 2 trainer with expertise in high-intensity interval training and group fitness.",
            social: {
                instagram: "#",
                twitter: "#",
                tiktok: "#"
            }
        },
       
    ];

    // Rest of your component code remains the same
    return (
        <section className="trainers-section reveal" id="trainers">
            <h2>Our Expert Trainers</h2>
            <div className="trainers-grid">
                {trainers.map((trainer, index) => (
                    <div className="trainer-card" key={index}>
                        <div className="trainer-card-inner">
                            <div className="trainer-card-front">
                                <img src={trainer.image} alt={trainer.name} />
                                <div className="trainer-info">
                                    <h3>{trainer.name}</h3>
                                    <p>{trainer.role}</p>
                                </div>
                            </div>
                            <div className="trainer-card-back">
                                <h3>{trainer.name}</h3>
                                <p>{trainer.experience}</p>
                                <div className="trainer-social">
                                    {trainer.social.instagram && (
                                        <a href={trainer.social.instagram} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    )}
                                    {trainer.social.twitter && (
                                        <a href={trainer.social.twitter} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    )}
                                    {trainer.social.facebook && (
                                        <a href={trainer.social.facebook} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    )}
                                    {trainer.social.linkedin && (
                                        <a href={trainer.social.linkedin} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    )}
                                    {trainer.social.youtube && (
                                        <a href={trainer.social.youtube} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    )}
                                    {trainer.social.tiktok && (
                                        <a href={trainer.social.tiktok} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-tiktok"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TrainersSection;