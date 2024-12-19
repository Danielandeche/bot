const isBrowser = () => typeof window !== 'undefined';

const deriv_com_url = 'd-mecca.com';
const deriv_me_url = 'd-mecca.com';
const deriv_be_url = 'd-mecca.com';

const supported_domains = [deriv_com_url, deriv_me_url, deriv_be_url];
const domain_url_initial = (isBrowser() && window.location.hostname.split('app.')[1]) || '';
const domain_url = supported_domains.includes(domain_url_initial) ? domain_url_initial : deriv_com_url;

export const deriv_urls = Object.freeze({
    DERIV_HOST_NAME: domain_url,
    DERIV_COM_PRODUCTION: `https://${domain_url}`,
    DERIV_COM_PRODUCTION_EU: `https://${domain_url}`,
    DERIV_COM_STAGING: `https://${domain_url}`,
    DERIV_APP_PRODUCTION: `https://${domain_url}`,
    DERIV_APP_STAGING: `https://${domain_url}`,
    SMARTTRADER_PRODUCTION: `https://${domain_url}`,
    SMARTTRADER_STAGING: `https://${domain_url}`,
    BINARYBOT_PRODUCTION: `https://${domain_url}`,
    BINARYBOT_STAGING: `https://${domain_url}`,
});
