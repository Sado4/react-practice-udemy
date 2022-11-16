import Hello, {Btn} from './Hello';

const Example: React.FC = () => {
    return (
        <>
            <Btn fn={(text) => {
                alert(text)
            }} />
            <Hello value="TS!!">
                <span>World</span>
            </Hello>
        </>
    );
};

export default Example;
