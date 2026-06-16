import LegalPage from "../../components/LegalPage";

const RefundCancellation = () => (
  <LegalPage
    title="Refund & Cancellation Policy"
    subtitle="Please read this policy carefully before making any payment for our services."
    lastUpdated="May 2025"
  >
    <div className="legal-section">
      <div className="legal-callout-warn">
        All payments made to AOB India Private Limited are strictly
        non-refundable and non-cancellable under any circumstances. By making a
        payment, you confirm that you have read and accepted this policy in
        full.
      </div>

      <p>
        AOB India Private Limited provides AI-powered sales revenue systems,
        sales outsourcing services, AI automation, revenue operations, lead
        generation solutions, and related consulting services. Due to the
        customized and execution-oriented nature of our services, the following
        Refund & Cancellation Policy applies.
      </p>
    </div>

    <div className="legal-section">
      <h2 className="legal-h2">
        <span className="legal-h2-num">1</span>
        Nature of Services
      </h2>
      <p className="legal-p">
        All services provided by AOB India are customized and may include:
      </p>
      <ul className="legal-ul">
        <li>Sales consulting and strategy</li>
        <li>AI automation and workflow setup</li>
        <li>Sales revenue operations implementation</li>
        <li>Sales outsourcing services</li>
        <li>Managed inside sales and field sales teams</li>
        <li>Lead generation and meeting generation systems</li>
        <li>CRM and reporting infrastructure</li>
        <li>Third-party software and platform integrations</li>
      </ul>

      <p className="legal-p">
        As these services involve planning, manpower allocation, technology
        costs, and operational setup, they are considered non-tangible and
        execution-based services.
      </p>
    </div>

    <div className="legal-section">
      <h2 className="legal-h2">
        <span className="legal-h2-num">2</span>
        Refund Policy
      </h2>
      <p className="legal-p">Payments made towards:</p>
      <ul className="legal-ul">
        <li>Consulting services</li>
        <li>Strategy design</li>
        <li>AI automation setup</li>
        <li>Sales process implementation</li>
        <li>Recruitment and manpower deployment</li>
        <li>Subscription fees</li>
        <li>Tool and software costs</li>
        <li>Monthly management fees</li>
        <li>Retainers</li>
        <p className="legal-p">are non-refundable.</p>
        <p className="legal-p">
          Refund requests based on business outcomes, sales results, lead
          conversion rates, revenue generation, or return on investment shall
          not be entertained.
        </p>
      </ul>
    </div>

    <div className="legal-section">
      <h2 className="legal-h2">
        <span className="legal-h2-num">3</span>
        Cancellation Policy
      </h2>
      <p className="legal-p">
        Clients may request cancellation of ongoing monthly services by
        providing a written notice as specified in the applicable agreement or
        purchase order
      </p>
      <p className="legal-p">
        Cancellation of services shall not entitle the client to a refund for:
      </p>
      <ul className="legal-ul">
        <li>Services already rendered</li>
        <li>Resources already deployed</li>
        <li>Tool subscriptions already purchased</li>
        <li>Third-party expenses incurred</li>
        <li>Partial months of service</li>
      </ul>
    </div>

    <div className="legal-section">
      <h2 className="legal-h2">
        <span className="legal-h2-num">4</span>
        Third-Party Costs
      </h2>
      <p className="legal-p">
        Costs incurred towards third-party software, advertising platforms, CRM
        systems, data providers, AI tools, cloud infrastructure, communication
        platforms, and other external services are non-refundable.
      </p>
      <p className="legal-p">
        Such costs are governed by the refund policies of the respective
        providers.
      </p>
    </div>

    <div className="legal-section">
      <h2 className="legal-h2">
        <span className="legal-h2-num">5</span>
        Outcome Disclaimer
      </h2>
      <p className="legal-p">
        AOB India provides execution, process, technology, and automation
        services designed to improve operational efficiency and support business
        growth.
      </p>
      <p className="legal-p">However, business outcomes such as:</p>
      <ul className="legal-ul">
        <li>Revenue generation</li>
        <li>Sales closures</li>
        <li>Conversion rates</li>
        <li>Profitability</li>
        <li>Return on investment</li>
      </ul>
      <p className="legal-p">
        depend on several external factors beyond the control of AOB India.
      </p>
      <p className="legal-p">
        Accordingly, no guarantee or assurance of business results is provided
        unless specifically agreed in writing.
      </p>
    </div>

    <div className="legal-section">
      <h2 className="legal-h2">
        <span className="legal-h2-num">6</span>
        Exceptional Circumstances
      </h2>
      <p className="legal-p">
        Any refund request outside the scope of this policy shall be reviewed
        solely at the discretion of AOB India, and the decision of AOB India
        shall be final and binding.
      </p>
    </div>

    <div className="legal-section">
      <h2 className="legal-h2">
        <span className="legal-h2-num">7</span>
        Contact Information
      </h2>
      <p className="legal-p">
        For any questions regarding this Refund & Cancellation Policy, please
        contact{" "}
        <a href="mailto:accounts@aobindia.org" className="legal-email">
          accounts@aobindia.org
        </a>
        .{" "}
      </p>

      <p className="legal-p">
        By engaging AOB India's services, the client acknowledges and agrees to
        the terms of this Refund & Cancellation Policy.
      </p>
    </div>
  </LegalPage>
);

export default RefundCancellation;
