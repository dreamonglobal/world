import React, { useState } from 'react';
import { Heart, CreditCard, Wallet } from 'lucide-react';
import { PayPalButtons } from '@paypal/react-paypal-js';

export const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isMonthly, setIsMonthly] = useState(false);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const getCurrentAmount = () => {
    if (customAmount) return Number(customAmount);
    if (selectedAmount) return selectedAmount;
    return 0;
  };

  const getPlanId = () => {
    switch (selectedAmount) {
      case 10:
        return "P-7A7655419A920350MNBBQ2LY";
      case 25:
        return "P-6CH42287G5836352CNBBQ3FI";
      case 50:
        return "P-58C237025P0490838NBBQ4DI";
      case 100:
        return "P-2BE1995355362082ANBBQ4ZI"
      case 200:
        return "P-8US7059055961053YNBBQ5DY"
      case 500:
        return "P-32R44795XV328891SNBBRGOA"
      default:
        return "P-2BE1995355362082ANBBQ4ZI";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Support Our Mission</h1>
            <p className="text-xl text-zinc-400">
              Your generosity helps us continue building hope and transforming lives around the world.
              <br />
              <br />

              You can mail a check to:
              <br />
              <br />
              Dream On: Global
              <br />
              830 Glynwood Road
              <br />
              Wapakoneta, Ohio 45895
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-zinc-900 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <CreditCard className="w-6 h-6 text-red-500" />
                <div className="w-full">
                  <h3 className="text-xl font-semibold mb-2">One-Time Gift</h3>
                  <p className="text-zinc-400 mb-6">
                    Make an immediate impact with a one-time donation to support our global initiatives.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[25, 50, 100].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountSelect(amount)}
                        className={`${
                          selectedAmount === amount ? 'bg-red-500' : 'bg-zinc-800 hover:bg-zinc-700'
                        } text-white py-3 rounded-lg transition`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Custom Amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 mb-4"
                    min="1"
                  />
                  <div className="mt-6">
                    <PayPalButtons
                      style={{ layout: "horizontal" }}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          intent: "CAPTURE",
                          purchase_units: [
                            {
                              amount: {
                                currency_code: "USD",
                                value: getCurrentAmount().toString(),
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={async (data, actions) => {
                        if (!actions.order) return;
                        const details = await actions.order.capture();
                        alert("Transaction completed by " + (details.payer?.name?.given_name ?? "Donor"));
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Wallet className="w-6 h-6 text-red-500" />
                <div className="w-full">
                  <h3 className="text-xl font-semibold mb-2">Monthly Partnership</h3>
                  <p className="text-zinc-400 mb-6">
                    Join our monthly giving program to provide sustained support for our ongoing missions.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[10, 25, 50, 100, 200, 500].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          handleAmountSelect(amount);
                          setIsMonthly(true);
                        }}
                        className={`${
                          selectedAmount === amount && isMonthly ? 'bg-red-500' : 'bg-zinc-800 hover:bg-zinc-700'
                        } text-white py-3 rounded-lg transition`}
                      >
                        ${amount}/mo
                      </button>
                    ))}
                  </div>
                  <div className="mt-6">
                    <PayPalButtons
                      style={{ layout: "horizontal" }}
                      createSubscription={(data, actions) => {
                        return actions.subscription.create({
                          plan_id: getPlanId()
                        });
                      }}
                      onApprove={async (data) => {
                        alert("You have successfully created subscription " + (data.subscriptionID ?? "(no ID returned)"));
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-zinc-400">
            <p>Your donation is tax-deductible to the extent allowed by law.</p>
            <p>Dream On World is a registered 501(c)(3) nonprofit organization.</p>
            <p className='mt-4'>Your generosity changes communities, generations, and nations. We want you to know there are currently 3 primary giving lanes Dream On uses donations: local outreach, mission trips, and mass international evangelism. Effective January 1, 2023, 5% of all transactions are retained for operational costs. Our vision is that all ministry overhead would be covered, so that 100% of giving would go straight to the front lines of the vision.</p>
          </div>
        </div>
      </div>
    </div>
  );
};