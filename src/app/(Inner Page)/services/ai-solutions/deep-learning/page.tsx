import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "AI Deep Learning | Selsoft",
  description: "Advanced deep learning solutions for high-precision AI applications including image recognition, NLP, speech processing, and predictive analytics.",
};

const DeepLearningPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="AI Deep Learning" />
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service-content">
                  <h2 className="rv-inner-service-content__title text-center mb-4">
                    AI Deep Learning at Selsoft
                  </h2>
                  
                  <div className="service-hero-image text-center mb-5">
                    <img 
                      src="/assets/img/services/deep-learning-hero.jpg" 
                      alt="AI Deep Learning" 
                      className="img-fluid rounded"
                      style={{ maxHeight: "400px", width: "auto" }}
                    />
                  </div>
                  
                  <p className="mb-4">
                    At Selsoft, we specialize in deep learning, an advanced subset of machine learning 
                    that uses neural networks to model complex patterns in data. Our AI deep learning 
                    solutions are designed to handle large datasets and deliver high-precision results 
                    for tasks ranging from image recognition to speech processing.
                  </p>

                  <h3 className="h4 mt-5 mb-4">Our Deep Learning Solutions</h3>
                  <p className="mb-3">
                    We offer comprehensive deep learning services that help businesses unlock the 
                    potential of their data and create powerful, AI-driven applications.
                  </p>

                  <div className="row g-4 mb-5">
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-microchip fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Deep Learning Model Development</h4>
                        <p>
                          Our team develops custom deep learning models tailored to your specific needs. 
                          We build complex models using neural networks, convolutional neural networks (CNNs), 
                          and recurrent neural networks (RNNs) to solve challenges like image recognition, 
                          speech-to-text, and natural language understanding.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-camera fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Image and Video Analysis</h4>
                        <p>
                          We specialize in deep learning-based image and video analysis, enabling businesses 
                          to automatically analyze and categorize visual data. From facial recognition to 
                          object detection, our models can process and extract valuable information from 
                          large amounts of unstructured visual data.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-language fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Natural Language Processing (NLP)</h4>
                        <p>
                          We leverage deep learning techniques to develop advanced NLP models that can 
                          understand and generate human language. Our deep learning-based NLP solutions 
                          are used for sentiment analysis, chatbots, machine translation, and more.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-microphone fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Speech Recognition</h4>
                        <p>
                          We develop deep learning models for speech recognition that enable businesses 
                          to convert voice data into text. These models can be used in applications like 
                          virtual assistants, transcription services, and voice-enabled interfaces.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-chart-line fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">AI-Powered Forecasting & Prediction</h4>
                        <p>
                          We use deep learning algorithms to analyze historical data and generate accurate 
                          forecasts and predictions. Our AI-powered prediction models can be applied to demand 
                          forecasting, risk analysis, and customer behavior modeling.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="h4 mt-5 mb-4">Why Choose Us for AI Deep Learning?</h3>
                  <ul className="feature-list mb-5">
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Cutting-Edge Technology:</strong> We use the latest advancements in deep learning to deliver powerful, intelligent solutions.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Accuracy & Precision:</strong> Our models are designed to deliver high-accuracy results in complex tasks like image recognition, speech processing, and data forecasting.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Customization:</strong> We build custom deep learning solutions tailored to your specific business needs and objectives.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Scalability:</strong> Our deep learning models are scalable, enabling businesses to handle large datasets and grow their AI capabilities over time.
                    </li>
                  </ul>
                  
                  <h3 className="h4 mt-5 mb-4">Industries We Serve</h3>
                  <div className="row g-4 mb-5">
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-hospital fs-2 text-primary mb-3"></i>
                        <h5>Healthcare</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-landmark fs-2 text-primary mb-3"></i>
                        <h5>Finance</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-cart-shopping fs-2 text-primary mb-3"></i>
                        <h5>Retail</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-industry fs-2 text-primary mb-3"></i>
                        <h5>Manufacturing</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-tower-cell fs-2 text-primary mb-3"></i>
                        <h5>Telecommunications</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-film fs-2 text-primary mb-3"></i>
                        <h5>Media & Entertainment</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div className="call-to-action bg-light p-5 rounded text-center">
                    <h3 className="mb-3">Get Started with AI Deep Learning</h3>
                    <p className="mb-4">
                      Transform your business with the power of deep learning. Contact us today to explore 
                      how our AI deep learning solutions can unlock new opportunities and deliver powerful insights.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                      <a href="/contact" className="btn btn-primary">Contact Us</a>
                      <a href="/services/ai-solutions" className="btn btn-outline-primary">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </InnerLayout>
    </main>
  );
};

export default DeepLearningPage;
