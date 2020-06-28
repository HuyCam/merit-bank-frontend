import React from 'react';

const AccountCard = ({accountType, balance}) => {
    return(
        <div className="bank-card selected">
            <h2 className="account-type">{accountType}</h2>
            <p className="balance">{balance}</p>
        </div>
    );
}

export default AccountCard;