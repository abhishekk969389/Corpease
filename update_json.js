const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'corpease.json');
let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Update all blog links
const blog1Posts = data.CorpEase.sections.Blog.variants.CorpEaseBlog1.posts;
blog1Posts.forEach(post => {
  post.link = post.link.replace('/blogs/', '/blogdetails/');
});

const blogPagePosts = data.CorpEase.sections.Blog.variants.CorpEaseBlogPage1.posts;
blogPagePosts.forEach(post => {
  post.link = post.link.replace('/blogs/', '/blogdetails/');
});

// Update subbanner for blogdetails if it doesn't exist
if (!data.CorpEase.sections.SubBanner.variants.blogdetails) {
  data.CorpEase.sections.SubBanner.variants.blogdetails = {
    title: "Blog Detail",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Blog Detail", href: "#" }
    ]
  };
}

// Add BlogDetails section
data.CorpEase.sections.BlogDetails = {
  variants: {
    "private-limited-company-registration-guide": {
      title: "A Complete Guide to Private Limited Company Registration",
      slug: "private-limited-company-registration-guide",
      date: "Oct 12, 2024",
      author: "Admin",
      category: "Business Registration",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      content: {
        intro: "Starting a business is an exciting journey, and a Private Limited Company (Pvt. Ltd.) is one of the most popular and preferred business structures in India. It offers limited liability, separate legal identity and greater credibility, making it an ideal choice for startups, SMEs and growing businesses.",
        sections: [
          {
            title: "What is a Private Limited Company?",
            paragraphs: [
              "A Private Limited Company is a type of privately held business entity registered under the Companies Act, 2013. It requires a minimum of 2 directors and 2 shareholders, and the liability of its members is limited to their shareholding. This structure is ideal for entrepreneurs who want to operate with professional credibility and safeguard their personal assets."
            ]
          },
          {
            title: "Procedure for Registration",
            paragraphs: [
              "The process of registering a Private Limited Company involves name approval, document submission, filing with the Ministry of Corporate Affairs (MCA) and obtaining the Certificate of Incorporation. With professional assistance, the entire process can be completed smoothly and without hassle."
            ]
          },
          {
            title: "Conclusion",
            paragraphs: [
              "A Private Limited Company is a strong foundation for long-term business success. It not only provides legal protection but also enhances your brand value and opens doors to new opportunities. If you are planning to start your business, registering a Private Limited Company can be the right step towards growth and sustainability."
            ]
          }
        ],
        benefits: {
          title: "Key Benefits of a Private Limited Company",
          items: [
            { title: "Limited Liability", description: "Personal assets remain protected from business liabilities.", icon: "FiShield" },
            { title: "Greater Credibility", description: "Build trust with clients, investors and stakeholders.", icon: "FiTrendingUp" },
            { title: "Easy Fundraising", description: "Attract investors and secure business loans with ease.", icon: "FiUsers" },
            { title: "Separate Legal Identity", description: "Operates as an independent legal entity.", icon: "FiFileText" }
          ]
        }
      }
    },
    "llp-registration-benefits-process-compliance": {
      title: "LLP Registration: Benefits, Process and Compliance",
      slug: "llp-registration-benefits-process-compliance",
      date: "Oct 08, 2024",
      author: "Admin",
      category: "Company Formation",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80",
      content: {
        intro: "A Limited Liability Partnership (LLP) is a popular business structure that combines the flexibility of a partnership with the advantages of limited liability for its partners.",
        sections: [
          {
            title: "What is an LLP?",
            paragraphs: [
              "An LLP is an alternative corporate business form that gives the benefits of limited liability of a company and the flexibility of a partnership. It is governed by the Limited Liability Partnership Act, 2008."
            ]
          },
          {
            title: "Registration Process",
            paragraphs: [
              "The registration process involves obtaining Digital Signatures, getting name approval, and filing the incorporation forms with the MCA."
            ]
          },
          {
            title: "Conclusion",
            paragraphs: [
              "LLP is highly suitable for professionals, micro and small businesses that are closely-held."
            ]
          }
        ],
        benefits: {
          title: "Key Benefits of an LLP",
          items: [
            { title: "Limited Liability", description: "Partners' liability is limited to their contribution.", icon: "FiShield" },
            { title: "No Minimum Capital", description: "Can be started with any amount of capital.", icon: "FiTrendingUp" },
            { title: "Lower Compliance", description: "Fewer compliance requirements than a Pvt Ltd company.", icon: "FiFileText" },
            { title: "Flexible Agreement", description: "Internal structure can be easily managed by an agreement.", icon: "FiUsers" }
          ]
        }
      }
    },
    "trademark-registration-protect-your-brand": {
      title: "Trademark Registration: Protect Your Brand Identity",
      slug: "trademark-registration-protect-your-brand",
      date: "Oct 05, 2024",
      author: "Admin",
      category: "Trademark & IP",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",
      content: {
        intro: "Your brand is your business's most valuable asset. Registering a trademark is the first and most crucial step in protecting your brand identity from infringement and unauthorized use.",
        sections: [
          {
            title: "Why Register a Trademark?",
            paragraphs: [
              "A registered trademark grants you exclusive rights to use your brand name, logo, or slogan. It prevents competitors from confusing your customers with similar branding."
            ]
          },
          {
            title: "The Registration Process",
            paragraphs: [
              "The process includes conducting a trademark search, filing the application, examination by the registry, publication in the trademark journal, and finally, registration."
            ]
          },
          {
            title: "Conclusion",
            paragraphs: [
              "Don't wait until someone else steals your brand name. Secure your trademark today to build a lasting legacy."
            ]
          }
        ],
        benefits: {
          title: "Key Benefits of Trademark Registration",
          items: [
            { title: "Exclusive Rights", description: "Sole ownership of the brand name and logo.", icon: "FiShield" },
            { title: "Legal Protection", description: "Strong legal defense against infringement.", icon: "FiFileText" },
            { title: "Asset Creation", description: "Creates an intangible asset for the business.", icon: "FiTrendingUp" },
            { title: "Customer Trust", description: "Builds brand recognition and trust among customers.", icon: "FiUsers" }
          ]
        }
      }
    },
    "gst-registration-guide": {
      title: "GST Registration: Everything You Need to Know",
      slug: "gst-registration-guide",
      date: "Oct 01, 2024",
      author: "Admin",
      category: "GST & Taxation",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
      content: {
        intro: "Goods and Services Tax (GST) is a comprehensive indirect tax in India. Proper GST registration and compliance are vital for smooth business operations.",
        sections: [
          {
            title: "Who Needs GST Registration?",
            paragraphs: [
              "Any business whose turnover exceeds the threshold limit of Rs. 40 lakhs (Rs. 20 lakhs for special category states) must register for GST. Additionally, businesses involved in inter-state supply, e-commerce, and casual taxable persons require mandatory registration."
            ]
          },
          {
            title: "How to Register?",
            paragraphs: [
              "Registration can be done online through the GST portal by submitting required documents such as PAN, Aadhaar, and proof of business premises."
            ]
          },
          {
            title: "Conclusion",
            paragraphs: [
              "Timely GST registration ensures legal compliance, enables you to claim input tax credit, and expands your business horizons without interstate restrictions."
            ]
          }
        ],
        benefits: {
          title: "Advantages of GST Registration",
          items: [
            { title: "Legal Recognition", description: "Recognized legally as a supplier of goods/services.", icon: "FiShield" },
            { title: "Input Tax Credit", description: "Claim credit for taxes paid on purchases.", icon: "FiTrendingUp" },
            { title: "E-commerce Selling", description: "Mandatory for selling online.", icon: "FiUsers" },
            { title: "Inter-state Sales", description: "Unrestricted supply of goods across states.", icon: "FiFileText" }
          ]
        }
      }
    },
    "msme-registration-benefits": {
      title: "Benefits of MSME Registration for Startups",
      slug: "msme-registration-benefits",
      date: "Sep 28, 2024",
      author: "Admin",
      category: "Business Growth",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
      content: {
        intro: "MSME (Micro, Small, and Medium Enterprises) registration provides numerous benefits designed to help small businesses and startups thrive in a competitive market.",
        sections: [
          {
            title: "What is MSME Registration?",
            paragraphs: [
              "Also known as Udyam Registration, it is a government certification provided to micro, small, and medium-sized enterprises to support their growth through various schemes."
            ]
          },
          {
            title: "The Registration Process",
            paragraphs: [
              "The process is entirely online, paperless, and based on self-declaration. All you need is an Aadhaar Number and PAN."
            ]
          },
          {
            title: "Conclusion",
            paragraphs: [
              "With benefits ranging from cheaper loans to protection against delayed payments, MSME registration is highly recommended for all eligible startups."
            ]
          }
        ],
        benefits: {
          title: "Top Benefits of MSME Registration",
          items: [
            { title: "Cheaper Bank Loans", description: "Lower interest rates on business loans.", icon: "FiTrendingUp" },
            { title: "Tax Rebates", description: "Exemptions under direct tax laws.", icon: "FiShield" },
            { title: "Protection from Delayed Payments", description: "Legal protection against delayed payments from buyers.", icon: "FiFileText" },
            { title: "Govt Tenders Preference", description: "Special preference and waivers in government tenders.", icon: "FiUsers" }
          ]
        }
      }
    },
    "partnership-firm-registration": {
      title: "Why You Need a Partnership Firm Registration",
      slug: "partnership-firm-registration",
      date: "Sep 22, 2024",
      author: "Admin",
      category: "Company Formation",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80",
      content: {
        intro: "When two or more people want to start a business together, a Partnership Firm is often the easiest and most traditional structure to adopt.",
        sections: [
          {
            title: "Understanding Partnership Firms",
            paragraphs: [
              "A partnership firm is governed by the Indian Partnership Act, 1932. It involves a formal agreement (Partnership Deed) between the partners outlining their roles, profit-sharing ratio, and responsibilities."
            ]
          },
          {
            title: "Is Registration Mandatory?",
            paragraphs: [
              "While registration is not strictly mandatory, an unregistered partnership firm faces several legal disabilities, such as the inability to file a suit against a third party."
            ]
          },
          {
            title: "Conclusion",
            paragraphs: [
              "For a hassle-free operation and legal security, registering the partnership firm with the Registrar of Firms is highly advisable."
            ]
          }
        ],
        benefits: {
          title: "Benefits of Registered Partnership",
          items: [
            { title: "Easy Formation", description: "Minimal legal formalities compared to companies.", icon: "FiTrendingUp" },
            { title: "Legal Protection", description: "Ability to sue third parties and partners.", icon: "FiShield" },
            { title: "Shared Responsibility", description: "Burden of management and risks is shared.", icon: "FiUsers" },
            { title: "Flexibility", description: "Partners can easily change terms via a revised deed.", icon: "FiFileText" }
          ]
        }
      }
    }
  }
};

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
