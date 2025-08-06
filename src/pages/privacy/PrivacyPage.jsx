const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#0d1117] dark:text-[#f0f6fc] px-4 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r bg-blue-500 rounded-full mb-6 shadow-lg">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            This Privacy Policy outlines how Jallen Products collects, uses, and
            protects your personal information when you use our services.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 shadow-2xl rounded-3xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Terms Sections */}
            {/* Introduction */}
            <div className="mb-10 p-6 bg-blue-50/50 dark:bg-blue-900/20 rounded-2xl border border-blue-200/30 dark:border-blue-700/30">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Welcome to{" "}
                <strong className="text-blue-600 dark:text-blue-400">
                  Jallen Products (JP)
                </strong>
                . By accessing or using our website, you agree to the collection
                and use of information in accordance with this policy. Please
                read it carefully to understand how we handle your data.
              </p>
            </div>
            <div className="space-y-8">
              {/* Section 1 */}
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    1
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    Information We Collect
                  </h2>
                </div>
                <div className="ml-12 p-4 bg-gray-50/50 dark:bg-gray-700/30 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We collect information you provide directly, such as your
                    name, email, shipping address, and payment details when
                    placing an order. We also automatically collect certain
                    information about your device and browsing behavior through
                    cookies and similar technologies.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    2
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    How We Use Your Information
                  </h2>
                </div>
                <div className="ml-12 p-4 bg-gray-50/50 dark:bg-gray-700/30 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Your information is used to process transactions, provide
                    customer support, improve our services, and send updates
                    related to your order. We may also use aggregated data for
                    analytics purposes to understand how our services are used
                    and to make improvements.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    3
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    Sharing Your Information
                  </h2>
                </div>
                <div className="ml-12 p-4 bg-gray-50/50 dark:bg-gray-700/30 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We do not sell or rent your personal data. We only share
                    your information with trusted third parties necessary to
                    complete your purchase (such as payment processors and
                    shipping carriers) or when required by law. We ensure all
                    third parties maintain appropriate security measures to
                    protect your data.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    4
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    Data Security
                  </h2>
                </div>
                <div className="ml-12 p-4 bg-gray-50/50 dark:bg-gray-700/30 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We implement industry-standard measures to protect your
                    personal data, including encryption, secure servers, and
                    access controls. However, no method of transmission over the
                    internet is 100% secure, and we cannot guarantee absolute
                    security of your information.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    5
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    Cookies and Tracking Technologies
                  </h2>
                </div>
                <div className="ml-12 p-4 bg-gray-50/50 dark:bg-gray-700/30 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Our website uses cookies and similar tracking technologies
                    to enhance your browsing experience, analyze site traffic,
                    and personalize content. You can manage your cookie
                    preferences through your browser settings, but please note
                    that disabling cookies may affect certain features of our
                    website.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    6
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    Your Rights
                  </h2>
                </div>
                <div className="ml-12 p-4 bg-gray-50/50 dark:bg-gray-700/30 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    You have the right to access, update, or delete your
                    personal information. You may also request restrictions on
                    processing or object to certain uses of your data. Contact
                    us using the information below to exercise these rights. We
                    will respond to your request within a reasonable timeframe.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    7
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    Changes to This Policy
                  </h2>
                </div>
                <div className="ml-12 p-4 bg-gray-50/50 dark:bg-gray-700/30 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or legal requirements. We
                    will notify you of significant changes by posting the new
                    policy on our website with an updated effective date. We
                    encourage you to review this page periodically for the
                    latest information on our privacy practices.
                  </p>
                </div>
              </div>

              {/* Section 8 - Contact */}
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    8
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    Contact Us
                  </h2>
                </div>
                <div className="ml-12 p-4 dark:blue-900 rounded-xl border border-blue-200/50 dark:border-blue-700">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    If you have any questions or concerns regarding this Privacy
                    Policy or our data practices, please contact us at{" "}
                    <a
                      href="mailto:jallenportugal5@gmail.com"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-semibold underline decoration-2 underline-offset-2"
                    >
                      jallenportugal@gmail.com
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 p-6 bg-white/60 dark:bg-gray-800/60 rounded-2xl border border-white/20 dark:border-gray-700/50 backdrop-blur-sm">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            By continuing to use our website, you acknowledge that you have
            read, understood, and agree to be bound by this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
