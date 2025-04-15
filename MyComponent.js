import PropTypes from 'prop-types';

const MyComponent = (pr) => {
    const { name, children, favoriteNumber} = pr;
    return (
        <div>
            <h1>나의 첫 번째 컴포넌트</h1>
            <h1>제 이름은 {name} 입니다.</h1>
            <h2> children 값은 {children} 입니다.</h2>
            <br />
            제가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
    )
}

MyComponent.defaltProps = {
    name: '기본 이름'
}

MyComponent.propTypes = {
    name:PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
}

export default MyComponent