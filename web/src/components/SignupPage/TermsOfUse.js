const TermsOfUse = () => {
    <label>
    <input
    type="checkbox"
    checked={agreement}
    onChange={handleAgreementChange}
    />
    약관에 동의합니다.
</label>
};

export default TermsOfUse;