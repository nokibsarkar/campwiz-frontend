import Footer from "@/components/home/Footer";

const PrivacyPolicy = () => (
    <>
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-gray-200">Privacy Policy</h1>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-8"><strong>Effective Date:</strong> April 4, 2025</p>

                <section className="mb-8">
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        At <strong>CampWiz NXT</strong>, your privacy is important to us. This Privacy Policy outlines what information we collect, why we collect it, and how we use it.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">Information We Collect</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">We only collect the following publicly available information:</p>
                    <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                        <li><strong>Public Wikimedia Username</strong></li>
                        <li><strong>Date of Registration</strong> on Wikimedia projects</li>
                        <li><strong>Public IP Address</strong> for using our tool</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300">
                        This information is essential for CampWiz NXT to function properly, including managing campaigns, verifying user eligibility, and maintaining fairness.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">Use of Cookies</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">We use cookies solely for:</p>
                    <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                        <li><strong>Authentication</strong> – to verify your identity during sessions (Using OAuth2.0)</li>
                        <li><strong>Authorization</strong> – to determine access levels and features based on your role (Using JWT Token)</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300">
                        We do <strong>not</strong> use cookies for tracking, advertising, or analytics.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">User Activity Monitoring</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        To detect abuse and ensure fair usage of the platform, we monitor user actions such as:
                    </p>
                    <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                        <li>Campaign creation</li>
                        <li>Project creation</li>
                        <li>Round creation</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300">
                        However, we <strong>do not monitor</strong> which jury evaluated which submission, or the scores they gave. Jury evaluations remain private within the system and are not linked to individual evaluators for monitoring purposes.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">Error Monitoring and Performance</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        To prevent abuse and improve system performance, we use <strong>Sentry &trade;</strong>, an error tracking and performance monitoring service.
                    </p>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">We send the following limited data to Sentry&trade;:</p>
                    <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                        <li><strong>Your Wikimedia Username</strong></li>
                        <li><strong>Your Internal CampWiz NXT ID</strong></li>
                    </ul>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        Sentry&trade; <strong>does not</strong> receive your IP address or any personally identifiable information. We’ve configured Sentry to avoid tracking or storing data that could compromise your privacy.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        For more information, please refer to Sentry&trade;&apos;s Privacy Policy: <a href="https://sentry.io/trust/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://sentry.io/privacy/</a>.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">Data Sharing and Retention</h2>
                    <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                        <li>We <strong>do not sell, share, or disclose</strong> your account data to any third parties not mentioned in this policy. But we do provide submission results to the appropriate rightholders to use in any way they want with best of our intentions to be< a href="https://en.wikipedia.org/w/index.php?title=Wikipedia:Assume_good_faith&oldid=1278089355">good faith.</a></li>
                        <li>Data is only used internally for campaign and jury processes.</li>
                        <li>We retain data only for as long as it’s needed to support the functionality of CampWiz NXT.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">Your Rights</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        Because we only use publicly available and minimal information, we do not store sensitive personal data. If you have any questions or concerns about your data or privacy, please contact us at <a href="mailto:support@wikilovesfolklore.org" className="text-blue-500 hover:underline">support@wikilovesfolklore.org</a>.
                    </p>
                </section>
            </div>
        </div>
        <Footer />
    </>
);

export default PrivacyPolicy;
