"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroLogoCarousel from '@/components/sections/hero/HeroLogoCarousel';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import ProductCardSeven from '@/components/sections/product/ProductCardSeven';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBase from '@/components/sections/footer/FooterBase';
import { MessageCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="smallSizeLargeTitles"
      background="dotGrid"
      cardStyle="noise-gradient"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Good game"
          navItems={[
            {"name":"Home","id":"hero"},
            {"name":"Products","id":"products"},
            {"name":"About","id":"about"},
            {"name":"Contact","id":"contact"}
          ]}
          button={{ "text":"Shop Now Last", "href":"https://linkedin.com" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoCarousel
          logoText="Good game"
          description="Discover the world of fun and imagination. Premium toys for every age and interest. From educational puzzles to action figures, find the perfect toy for your child."
          mediaItems={[
            {"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766067208117-dpijqfwf.jpg","imageAlt":"Colorful toys collection"},
            {"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766067209399-j4qt5u1c.jpg","imageAlt":"Children playing with toys"},
            {"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766067210707-f6o6l5ji.jpg","imageAlt":"Toy store display"},
            {"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766067211927-rtx3kaps.jpg","imageAlt":"Educational toys"},
            {"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766067213031-l5ukgkw4.jpg","imageAlt":"Action figures"}
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We bring joy and learning together through quality toys that inspire imagination and creativity in every child."
          useInvertedBackground="noInvert"
          buttons={[{"text":"Learn More Oke 2","href":"https://www.linkedin.com"},
            {"text":"Contact Us","href":"#contact"}]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyOne
          title="Why Choose Good Game"
          description="We offer a carefully curated selection of toys that meet the highest safety and quality standards."
          tag="Our Promise"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766067214476-dgs98em4.jpg"
          imageAlt="Quality toy inspection"
          accordionItems={[
            {"id":"1","title":"Safety First","content":"All our toys meet international safety standards and certifications. We ensure every product is tested and safe for children of all ages."},
            {"id":"2","title":"Educational Value","content":"Our collection includes toys that promote learning, creativity, and cognitive development. We believe play is the best way to learn."},
            {"id":"3","title":"Affordable Prices","content":"Quality toys shouldn't be expensive. We offer competitive pricing without compromising on quality or safety standards."}
          ]}
          useInvertedBackground="noInvert"
          mediaPosition="left"
          buttons={[
            {"text":"Browse Collection","href":"#products"}
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardSeven
          title="Featured Products"
          description="Explore our bestselling toys that bring joy to thousands of children."
          products={[
            {"id":"1","name":"Building Blocks Set","price":"$24.99","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766067215625-kkc2n2dq.jpg","imageAlt":"Colorful building blocks"},
            {"id":"2","name":"Puzzle Game Bundle","price":"$18.99","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766067216848-smcywtun.jpg","imageAlt":"Educational puzzle games"},
            {"id":"3","name":"Plush Animals Collection","price":"$15.99","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766067217870-9rc6zfp3.jpg","imageAlt":"Soft stuffed animals"}
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Parents Say"
          description="Real families sharing their love for Good Game toys"
          testimonials={[
            {"id":"1","name":"Sarah Johnson","handle":"@happyparent","testimonial":"My kids absolutely love the toys from Good Game. The quality is amazing and they're learning while playing. Highly recommend!","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766067219002-vaa4s3m3.jpg","imageAlt":"Happy child playing"},
            {"id":"2","name":"Michael Chen","handle":"@familytime","testimonial":"Best toy store in town! Great selection, fair prices, and the staff is super helpful. We're regular customers now.","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766067220287-u9ce6nr0.jpg","imageAlt":"Family with toys"},
            {"id":"3","name":"Emily Rodriguez","handle":"@toylovers","testimonial":"The educational toys are fantastic. My daughter's creativity and problem-solving skills have improved so much.","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766067221522-00z91e3s.jpg","imageAlt":"Kid enjoying toys"},
            {"id":"4","name":"David Thompson","handle":"@dadlife","testimonial":"Safe, fun, and affordable. Good Game has everything we need for our kids' playtime. Worth every penny!","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766067222836-0qcsw02v.jpg","imageAlt":"Children having fun"},
            {"id":"5","name":"Lisa Anderson","handle":"@mommyblog","testimonial":"I trust Good Game toys completely. They care about quality and child safety. Our go-to store for birthday gifts.","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766067224324-rygcbclk.jpg","imageAlt":"Smiling kids portrait"},
            {"id":"6","name":"James Wilson","handle":"@parentlife","testimonial":"The variety is incredible. From classic toys to modern games, there's something for every age group. Love it!","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766067225432-vtsx2v2s.jpg","imageAlt":"Happy family moment"}
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={30}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our toys and services."
          faqs={[
            {"id":"1","title":"Are all toys safe for children?","content":"Yes, absolutely. All our toys meet international safety standards and are thoroughly tested. We only stock toys from reputable manufacturers with proper certifications."},
            {"id":"2","title":"What's your return policy?","content":"We offer a 30-day money-back guarantee on all unused toys. If you're not satisfied for any reason, simply bring the toy back with your receipt."},
            {"id":"3","title":"Do you offer warranty on toys?","content":"Many of our toys come with manufacturer warranties. We can provide warranty information for specific products upon request."},
            {"id":"4","title":"How do I know which toy is right for my child's age?","content":"Each toy is labeled with age recommendations. Our staff can also help you find the perfect toy based on your child's age, interests, and development stage."},
            {"id":"5","title":"Do you have educational toys?","content":"Yes, we have a large selection of educational toys that promote learning in areas like math, science, language, and problem-solving."},
            {"id":"6","title":"Can I order toys online?","content":"Currently, we operate as a physical store. Please visit us in person to browse our full selection. Contact us for more information about future online shopping options."}
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Get in Touch"
          ctaDescription="Have questions about our toys or services? We're here to help and excited to hear from you!"
          ctaButton={{
            "text":"Send Message",
            "href":"#"
          }}
          ctaIcon={MessageCircle}
          faqs={[
            {"id":"1","title":"What are your store hours?","content":"We're open Monday to Sunday, 10 AM to 8 PM. Visit us anytime to browse our full selection of quality toys."},
            {"id":"2","title":"Where is your store located?","content":"You can find us at the main shopping district. Contact us for exact directions and parking information."},
            {"id":"3","title":"Do you offer gift wrapping?","content":"Yes, we offer complimentary gift wrapping for all purchases. Perfect for birthdays and special occasions!"}
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          accordionAnimationType="smooth"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Good game"
          copyrightText="© 2025 Good Game. All rights reserved."
          columns={[
            {"title":"Shop","items":[{"label":"Featured Products","href":"products"},{"label":"New Arrivals","href":"products"},{"label":"Best Sellers","href":"products"},{"label":"Gift Ideas","href":"products"}]},
            {"title":"Company","items":[{"label":"About Us","href":"about"},{"label":"Contact","href":"contact"},{"label":"FAQ","href":"faq"},{"label":"Careers","href":"#"}]},
            {"title":"Support","items":[{"label":"Shipping Info","href":"#"},{"label":"Returns","href":"#"},{"label":"Safety Info","href":"#"},{"label":"Privacy Policy","href":"#"}]}
          ]}
        />
      </div>
    </ThemeProvider>
  );
}