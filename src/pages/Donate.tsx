import React, { useState } from 'react';
import { Heart, CreditCard, Wallet, CheckCircle, Share2, ArrowLeft } from 'lucide-react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { Link, useSearchParams } from 'react-router-dom';
import type { CreateOrderActions, CreateOrderData, CreateSubscriptionActions, OnApproveActions, OnApproveData } from '@paypal/paypal-js';

const campaignContext: Record<string, { label: string; impact: string; color: string }> = {
  wells: {
    label: 'Water Wells in Pakistan',
    impact: '$500 builds one well serving 500+ people with clean water and the Gospel',
    color: 'text-blue-400',
  },
  churches: {
    label: 'Churches Built',
    impact: '$7,000 builds one church — a beacon of hope for an entire community',
    color: 'text-red-400',
  },
  people: {
    label: 'People Reached',
    impact: '$20,000 funds one crusade reaching thousands with the Gospel',
    color: 'text-red-400',
  },
  pakistan: {
    label: 'Pakistan Mission Trip',
    impact: 'Help fund a historic crusade in Karachi, pastors conference, and community outreach',
    color: 'text-green-400',
  },
  brazil: {
    label: 'Brazil Crusade',
    impact: 'Help bring the Gospel to thousands through worship, conferences, and life-changing ministry',
    color: 'text-yellow-400',
  },
};

export const Donate = () => {
  const [searchParams] = useSearchParams();
  const campaign = searchParams.get('campaign');
  const context = campaign ? campaignContext[campaign] : null;

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isMonthly, setIsMonthly] = useState(false);
  const [donationComplete, setDonationComplete] = useState<{
    type: 'one-time' | 'monthly';
    name?: string;
    subscriptionId?: string;
  } | null>(null);

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

  if (donationComplete) {
    return (
      <div className="min-h-screen bg-black text-white pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-20">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl text-zinc-300 mb-2">
              {donationComplete.type === 'one-time'
                ? `Your generous gift makes an eternal impact${donationComplete.name ? `, ${donationComplete.name}` : ''}.`
                : 'Your monthly partnership will help transform lives around the world.'}
            </p>
            <p className="text-zinc-400 mb-8">
              Your donation is tax-deductible. Dream On World is a registered 501(c)(3) nonprofit.
            </p>

            <div className="bg-zinc-900 rounded-xl p-6 mb-8 text-left">
              <h3 className="font-semibold mb-3">What your gift makes possible:</h3>
              <ul className="text-zinc-300 space-y-2 text-sm">
                <li>$500 builds a water well serving 500+ people in Pakistan</li>
                <li>$7,000 builds a church for an entire community</li>
                <li>$20,000 funds a crusade reaching thousands</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  navigator.share?.({
                    title: 'Dream On World',
                    text: 'I just donated to Dream On World! Join me in transforming lives.',
                    url: 'https://dreamon.world/donate',
                  }).catch(() => {});
                }}
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition"
              >
                <Share2 className="w-4 h-4" />
                Share With Friends
              </button>
              <Link
                to="/"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:bg-zinc-900 text-white px-6 py-3 rounded-lg transition"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Support Our Mission</h1>
            <p className="text-xl text-zinc-400">
              Your generosity helps us continue building hope and transforming lives around the world.
            </p>

            {context && (
              <div className="mt-6 bg-zinc-900 border border-zinc-700 rounded-xl p-6 text-left">
                <p className="text-sm text-zinc-400 mb-1">You're giving toward:</p>
                <p className={`text-lg font-semibold ${context.color}`}>{context.label}</p>
                <p className="text-zinc-300 text-sm mt-2">{context.impact}</p>
              </div>
            )}

            <div className="mt-6 text-zinc-400 text-sm">
              <p>You can also mail a check to:</p>
              <p className="mt-1">Dream On: Global &middot; 830 Glynwood Road &middot; Wapakoneta, Ohio 45895</p>
            </div>
          </div>

          {/* Transparency Banner */}
          <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-4 mb-6 text-center">
            <p className="text-green-400 text-sm font-medium">
              95% of every dollar goes directly to the mission. Only 5% is retained for operations.
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
                      createOrder={(_data: CreateOrderData, actions: CreateOrderActions) => {
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
                      onApprove={async (_data: OnApproveData, actions: OnApproveActions) => {
                        if (!actions.order) return;
                        const details = await actions.order.capture();
                        setDonationComplete({
                          type: 'one-time',
                          name: details.payer?.name?.given_name,
                        });
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
                      createSubscription={(_data: Record<string, unknown>, actions: CreateSubscriptionActions) => {
                        return actions.subscription.create({
                          plan_id: getPlanId()
                        });
                      }}
                      onApprove={async (data: OnApproveData) => {
                        setDonationComplete({
                          type: 'monthly',
                          subscriptionId: data.subscriptionID,
                        });
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
