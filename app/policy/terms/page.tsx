

const TermsOfService = () => (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-8">
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-gray-200">Terms of Service</h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8"><strong>Effective Date:</strong> April 4, 2025</p>

            <section className="mb-8">
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                    Welcome to <strong>CampWiz NXT</strong>. By using our services, you agree to the following Terms of Service. If you do not agree with any of these terms, please do not use our platform.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">1. Eligibility</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    You must have an active Wikimedia account to use CampWiz NXT. The username and date of registration must be publicly visible.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">2. Acceptable Use</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                    You agree not to misuse CampWiz NXT. This includes, but is not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                    <li>Creating fraudulent or duplicate campaigns</li>
                    <li>Exploiting bugs or vulnerabilities in the system</li>
                    <li>Attempting to gain unauthorized access to data</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">3. User Data</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We only collect publicly available Wikimedia usernames and registration dates. Your data is used solely for campaign and jury process functionalities. Refer to our <a href="/policy/privacy" className="text-blue-500 hover:underline">Privacy Policy</a> for more information.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">4. Monitoring and Abuse Prevention</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                    To maintain fairness and prevent abuse, we may monitor the following activities:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                    <li>Campaign creation</li>
                    <li>Project and round creation</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                    Jury evaluations and scores are not monitored or associated with individual jury members.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">5. Service Availability</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    We strive to keep CampWiz NXT online and functional, but we do not guarantee uninterrupted access. We may suspend access for maintenance, updates, or in case of abuse.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">6. Disclaimer</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    CampWiz NXT is provided “as is” without warranties of any kind. We are not liable for any issues arising from the use of the platform, including data loss or access issues.
                </p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">7. Immunity Clause</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    The developers, maintainers, and affiliates of CampWiz NXT are not responsible for the misuse of the tool by its users, nor for the decisions made during campaign management or jury evaluations. By using this platform, you agree not to hold us liable for actions performed by third parties, including but not limited to organizers, jurors, or participants in any campaign hosted via CampWiz NXT.
                </p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">7. Changes to These Terms</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    We may update these Terms from time to time. Continued use of the platform after changes are posted implies acceptance of the new Terms.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">8. Contact</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    If you have any questions about these Terms, contact us at <a href="mailto:support@wikilovesfolklore.org" className="text-blue-500 hover:underline">support@wikilovesfolklore.org</a>.
                </p>
            </section>
        </div>
    </div>
);

export default TermsOfService;
