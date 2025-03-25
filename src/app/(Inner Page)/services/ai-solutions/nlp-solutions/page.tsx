import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "NLP Solutions | Selsoft",
  description: "Advanced Natural Language Processing (NLP) solutions for understanding and generating human language from Selsoft.",
};

const NLPSolutionsPage = () => {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="NLP Solutions" />
        <section className="rv-inner-service rv-section-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="rv-inner-service-content">
                  <h2 className="rv-inner-service-content__title text-center mb-4">
                    Natural Language Processing Solutions
                  </h2>
                  
                  <div className="service-hero-image text-center mb-5">
                    <img 
                      src="/assets/img/services/ai-development-hero.jpg" 
                      alt="NLP Solutions" 
                      className="img-fluid rounded"
                      style={{ maxHeight: "400px", width: "auto" }}
                    />
                  </div>
                  
                  <p className="mb-4">
                    At Selsoft, we develop cutting-edge Natural Language Processing (NLP) solutions that enable 
                    computers to understand, interpret, and generate human language. Our NLP technologies help 
                    businesses automate communication processes, extract valuable insights from unstructured text 
                    data, and create more intuitive human-computer interactions.
                  </p>

                  <h3 className="h4 mt-5 mb-4">Our NLP Solutions Services</h3>
                  <p className="mb-3">
                    We offer a comprehensive suite of NLP services designed to meet diverse business 
                    needs across industries.
                  </p>

                  <div className="row g-4 mb-5">
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-comments fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Text Analysis & Content Understanding</h4>
                        <p>
                          Our advanced text analysis solutions help businesses extract valuable insights from 
                          unstructured text data. We develop custom NLP models that can analyze sentiment, 
                          identify topics, extract key information, and classify text content, enabling businesses 
                          to understand customer feedback, market trends, and competitive intelligence.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-robot fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Conversational AI & Chatbots</h4>
                        <p>
                          We design and implement intelligent conversational AI systems and chatbots that understand 
                          natural language queries and provide relevant responses. Our NLP-powered conversational 
                          agents can handle customer inquiries, automate support functions, schedule appointments, 
                          and provide personalized recommendations, improving customer experience while reducing operational costs.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-language fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Multilingual NLP Solutions</h4>
                        <p>
                          Our multilingual NLP capabilities enable global businesses to process and analyze content in 
                          multiple languages. We develop solutions for machine translation, cross-lingual information 
                          retrieval, and multilingual sentiment analysis, helping businesses overcome language barriers 
                          and effectively engage with customers worldwide.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-file-alt fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Document Processing & Information Extraction</h4>
                        <p>
                          We create intelligent document processing solutions that automatically extract relevant 
                          information from various document types. Our NLP technologies can identify entities, 
                          relationships, and key data points from contracts, reports, forms, and other documents, 
                          streamlining document workflows and reducing manual processing.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="service-card p-4 h-100 shadow-sm rounded">
                        <div className="icon-wrapper mb-3">
                          <i className="fa-solid fa-search fs-1 text-primary"></i>
                        </div>
                        <h4 className="h5 mb-3">Semantic Search & Information Retrieval</h4>
                        <p>
                          Our semantic search solutions go beyond keyword matching to understand the intent and 
                          context of search queries. We implement advanced NLP techniques to improve search 
                          relevance, enhance content discovery, and enable more intuitive information retrieval, 
                          helping users find exactly what they're looking for quickly and efficiently.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="h4 mt-5 mb-4">Benefits of NLP Solutions</h3>
                  <ul className="feature-list mb-5">
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Enhanced Customer Experience:</strong> Improve interactions through intelligent chatbots and personalized communication.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Operational Efficiency:</strong> Automate text processing tasks and document workflows to save time and resources.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Data-Driven Insights:</strong> Extract valuable insights from unstructured text data to inform business decisions.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Global Reach:</strong> Overcome language barriers with multilingual NLP capabilities.
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-primary me-2"></i>
                      <strong>Competitive Advantage:</strong> Stay ahead with cutting-edge language technologies that enhance your products and services.
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
                        <h5>Finance & Banking</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-cart-shopping fs-2 text-primary mb-3"></i>
                        <h5>Retail & E-Commerce</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-building fs-2 text-primary mb-3"></i>
                        <h5>Legal & Compliance</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-globe fs-2 text-primary mb-3"></i>
                        <h5>Media & Publishing</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="industry-card p-3 text-center rounded">
                        <i className="fa-solid fa-graduation-cap fs-2 text-primary mb-3"></i>
                        <h5>Education</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div className="call-to-action bg-light p-5 rounded text-center">
                    <h3 className="mb-3">Transform Your Business with NLP Solutions</h3>
                    <p className="mb-4">
                      Ready to harness the power of natural language processing? Contact us today to discuss how 
                      our NLP solutions can help you automate processes, gain valuable insights, and enhance 
                      customer experiences.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                      <a href="/contact" className="btn btn-primary">Contact Us</a>
                      <a href="/services/ai-solutions" className="btn btn-outline-primary">Back to AI Solutions</a>
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

export default NLPSolutionsPage;