import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import { blogData6 } from "@/data/Data";
import Link from "next/link";

const BlogSection3 = () => {
  return (
    <section className="rv-12-blogs rv-section-spacing">
      <div className="container">
        <div className="rv-7-section__heading">
          <h6 className="rv-7-section__sub-title rv-text-anime">
            Blogs and News
          </h6>

          <h2 className="rv-7-section__title rv-text-anime">
            Recent Blog Posts
          </h2>
        </div>

        <DivAnimateYAxis className="row g-30 justify-content-center">
          {blogData6.map((item) => (
            <div
              className="col-lg-4 col-md-6 col-sm-8 col-9 col-xxs-12"
              key={item.id}
            >
              <div>
                <div className="rv-3-blog rv-12-blog">
                  <div className="rv-3-blog__img">
                    <img src={item.img} alt="Blog Image" />
                  </div>

                  <div className="rv-3-blog__txt">
                    <ul className="rv-3-blog__infos">
                      <li className="rv-3-blog__info rv-3-blog__cat">
                        {item.category}
                      </li>
                      <li className="rv-3-blog__info">
                        <img src="assets/img/rv-1-icon-4.png" alt="icon" />
                        {item.date}
                      </li>
                    </ul>
                    <h4 className="rv-3-blog__title">
                      <Link href="#">{item.title}</Link>
                    </h4>
                    <Link href="#" className="rv-12-blog__btn">
                      Read More <i className="fa-regular fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default BlogSection3;
