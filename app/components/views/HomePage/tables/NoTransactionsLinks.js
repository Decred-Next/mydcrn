import { Link } from "react-router-dom";
import { FormattedMessage as T } from "react-intl";
// import { ExternalLink } from "shared";

export default () => (
  <div className="overview-no-transactions">
    <Link to="/transactions/receive" className="receive">
      <T id="home.noTransactions.receiveLink" m="Generate a DCRN Address for receiving funds" /> →
    </Link>
    {/*<ExternalLink href="https://decred.org/exchanges" className="buy">
      <T id="home.noTransactions.buyFromExchanges" m="Buy DCRN from Exchanges" /> →
    </ExternalLink>*/}
  </div>
);
