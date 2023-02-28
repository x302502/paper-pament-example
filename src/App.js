import {
  PaperCheckout,
  PaperCheckoutDisplay
} from "@paperxyz/react-client-sdk";
import "./styles.css";

export default function App() {
  const tiers = [
    {
      price: 0.01
    },
    {
      price: 0.001
    },
    {
      price: 0.0001
    }
  ];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {tiers.map((tier, id) => {
        let value = `${tier.price} * $QUANTITY`;
        return (
          <div key={id}>
            <PaperCheckout
              checkoutId={"9e7dcfa9-3382-4498-927d-5a74888b2ba4"}
              // Note that you should use POPUP if you're doing a solana checkout due to phantom wallet limitations
              options={{
                width: 400,
                height: 800,
                colorBackground: "transparent",
                colorPrimary: "transparent",
                colorText: "#f1fde3",
                borderRadius: 0,
                fontFamily: "Open Sans"
              }}
              display={PaperCheckoutDisplay.DRAWER}
              mintMethod={{
                name: "claimTo",
                args: {
                  membershipAddr: "0x17d6C4761bBA6b21E61D9B6E3bA38ae1913080DA",
                  // This will become "0x123"
                  recipient: "$WALLET",
                  // This will resolve to whatever the user selects while going through the checkout
                  quantity: "$QUANTITY"
                },
                //
                payment: {
                  currency: "MATIC",
                  // This number value should be the price for a single quantity.
                  // In this example, if the user chose 2 NFT, they'll be paying 8MATIC
                  value: value
                },
                // optional, these are the deafult options
                callOptions: {
                  gasOptions: "medium"
                }
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
