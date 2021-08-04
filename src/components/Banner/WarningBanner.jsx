import './WarningBanner.css';

function WarningBanner(props) {
    if (!props.warn){
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    )
}

export default WarningBanner;