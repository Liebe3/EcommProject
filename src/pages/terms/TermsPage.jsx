const TermsPage = () => {
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services. Your
            use of Jallen Products constitutes acceptance of these terms.
          </p>
          {/* <div className="mt-6 text-sm text-gray-500 dark:text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </div> */}
        </div>

        {/* Main Content Card */}
        <div className="backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 shadow-2xl rounded-3xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Introduction */}
            <div className="mb-10 p-6 bg-blue-50/50 dark:bg-blue-900/20 rounded-2xl border border-blue-200/30 dark:border-blue-700/30">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Welcome to{" "}
                <strong className="text-blue-600 dark:text-blue-400">
                  Jallen Products (JP)
                </strong>
                . By accessing or using our website, you agree to be bound by
                the following terms and conditions. Please read them carefully
                before using our services.
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-8">
              {/* Section 1 */}
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r bg-blue-500  rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    1
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    Use of the Website
                  </h2>
                </div>
                <div className="ml-12 p-4 bg-gray-50/50 dark:bg-gray-700/30 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    You agree to use this website only for lawful purposes and
                    in a way that does not infringe on the rights of others.
                    Unauthorized use or misuse of the site may give rise to
                    legal action.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r bg-blue-500  rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    2
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    Products and Services
                  </h2>
                </div>
                <div className="ml-12 p-4 bg-gray-50/50 dark:bg-gray-700/30 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We make every effort to display accurate information about
                    our products, including descriptions, pricing, and
                    availability. However, we do not guarantee that all
                    information is error-free. We reserve the right to update or
                    correct information without prior notice.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r bg-blue-500  rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    3
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    Orders and Payment
                  </h2>
                </div>
                <div className="ml-12 p-4 bg-gray-50/50 dark:bg-gray-700/30 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    All orders are subject to acceptance and availability. We
                    reserve the right to refuse or cancel any order at our
                    discretion. Payments must be made using the methods provided
                    at checkout.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r bg-blue-500   rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    4
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    Shipping and Delivery
                  </h2>
                </div>
                <div className="ml-12 p-4 bg-gray-50/50 dark:bg-gray-700/30 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Shipping times and fees are provided at checkout. Jallen
                    Products is not responsible for delays due to external
                    factors, such as courier issues or weather disruptions.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r bg-blue-500   rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    5
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    Returns and Refunds
                  </h2>
                </div>
                <div className="ml-12 p-4 bg-gray-50/50 dark:bg-gray-700/30 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We accept returns for eligible items within 7 days of
                    delivery. Products must be unused and in their original
                    packaging. Please refer to our Return Policy for complete
                    details.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r bg-blue-500   rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    6
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    Intellectual Property
                  </h2>
                </div>
                <div className="ml-12 p-4 bg-gray-50/50 dark:bg-gray-700/30 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    All content on this website, including logos, images, text,
                    and design, is the property of Jallen Products and is
                    protected by copyright laws. You may not reproduce or
                    distribute any content without our written permission.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r bg-blue-500  rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    7
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    Limitation of Liability
                  </h2>
                </div>
                <div className="ml-12 p-4 bg-gray-50/50 dark:bg-gray-700/30 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Jallen Products is not liable for any indirect, incidental,
                    or consequential damages arising from the use or inability
                    to use the website or products.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r bg-blue-500   rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    8
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    Changes to Terms
                  </h2>
                </div>
                <div className="ml-12 p-4 bg-gray-50/50 dark:bg-gray-700/30 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We may update these Terms and Conditions at any time without
                    notice. It is your responsibility to check this page
                    periodically for changes.
                  </p>
                </div>
              </div>

              {/* Section 9 - Contact */}
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r bg-blue-500   rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    9
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    Contact Us
                  </h2>
                </div>
                <div className="ml-12 p-4  dark:blue-900 rounded-xl border border-blue-200/50 dark:border-blue-700">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    If you have any questions or concerns regarding these terms,
                    please contact us at{" "}
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
            read, understood, and agree to be bound by these Terms and
            Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
