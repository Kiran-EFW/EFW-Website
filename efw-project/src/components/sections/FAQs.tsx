import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQs = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const faqs: FAQItem[] = [
    {
      question: "How can I purchase EFWT tokens using Ethereum (ETH) from my Web3 wallet like MetaMask?",
      answer: "Step 1: Converting ETH to Base Network ETH - Access the Bridge in your MetaMask wallet to convert Ethereum Mainnet ETH to Base Network ETH, then follow the prompts to convert your ETH. Step 2: Swapping ETH for USDC on Base Network - Use the swap feature in MetaMask to exchange your Base Network ETH for USDC."
    },
    {
      question: "How can I purchase EFWT tokens using a Debit or Credit Card?",
      answer: "Step 1: Creating or Connecting a Web3 Wallet - Go to the EFWT Presale dashboard and connect your existing Web3 wallet or create a new one using social login. Step 2: Purchasing ETH on Base Network - Use the card purchase option to buy ETH directly on the Base Network."
    },
    {
      question: "How do I add EFWT to my Metamask Wallet?",
      answer: "Once the EFWT investment is done depending on the vesting period of the token in each round see tokenomics. The token will be available to be claimed on the platform on a daily basis. We would suggest you to claim the token from the smart contract every month or every two months to keep the transaction low. Adding EFWT to your smart contract web3 wallet can be done by clicking the plus button in the EFWT Presale dashboard at the top left part."
    }
  ];

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="brix---section">
      <div className="padding-section-medium">
        <div className="brix---container-default w-container">
          <div className="brix---mg-bottom-48px">
            <div className="brix---inner-container-574px---center">
              <div className="brix---text-center">
                <div className="brix---mg-bottom-16px">
                  <h2 className="heading-style-h2">Frequently Asked Questions</h2>
                </div>
                <p className="brix---paragraph-default">How to Navigate the Platform</p>
              </div>
            </div>
          </div>
          <div className="brix---faq-wrapper">
            {faqs.map((faq, index) => (
              <div key={index} className="brix---accordion-item-wrapper">
                <div className="brix---accordion-side">
                  <button
                    onClick={() => toggleItem(index)}
                    className="brix---btn-circle-accordion-btn w-inline-block"
                  >
                    <div className="brix---accordion-btn-vertical-line"></div>
                    <div className="brix---accordion-btn-horizontal-line"></div>
                  </button>
                </div>
                <div className="brix---accordion-content-wrapper">
                  <div className="brix---accordion-header">
                    <h3 className="brix---accordion-title">{faq.question}</h3>
                  </div>
                  <div
                    className="brix---acordion-body"
                    style={{
                      height: openItems.has(index) ? 'auto' : '0px',
                      opacity: openItems.has(index) ? 1 : 0
                    }}
                  >
                    <div className="brix---accordion-spacer"></div>
                    <div className="brix---paragraph-default w-richtext">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
