/*renderPageIndicators() {
    return (
      <CustomViewPageIndicator />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ViewPager
          dataSource={this.state.dataSource}
          renderPage={this._renderPage}
          renderPageIndicator={() => this.renderPageIndicators()}
          isLoop={false}
          autoPlay={false} />
      </View>
    );
  }

  
And for the CustomViewPageIndicator.js

export default class CustomViewPageIndicator extends Component {
  static propTypes = {
    goToPage: React.PropTypes.func,
    activePage: React.PropTypes.number,
    pageCount: React.PropTypes.number,
    scrollOffset: React.PropTypes.number,
    scrollValue: React.PropTypes.object,
    colorActive: React.PropTypes.string,
    bottomPosition: React.PropTypes.number,
    dotSize: React.PropTypes.number,
    dotSpace: React.PropTypes.number,
  };

  static defaultProps = {
    colorActive: Colors.colorAccent,
    bottomPosition: 25,
    dotSize: Constants.DOT_SIZE,
    dotSpace: Constants.DOT_SPACE,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      viewWidth: 0,
    };
  }

  renderIndicator(page, dotSizeStyle, borderRadiusStyle, marginSideSpace) {
    return (
      <TouchableOpacity style={styles.tab} key={'idc_' + page} onPress={() => this.props.goToPage(page)}>
        <View style={[styles.dot, dotSizeStyle, borderRadiusStyle, marginSideSpace]} />
      </TouchableOpacity>
    );
  }

  render() {
    const { colorActive, bottomPosition, activePage, scrollOffset, scrollValue, dotSize, dotSpace } = this.props;

    //Styles related to dotSize and dotSpace
    const dotSizeStyle = {width: dotSize, height: dotSize };
    const borderRadiusStyle = {borderRadius: dotSize / 2};
    const marginSideSpace = {marginLeft: dotSpace, marginRight: dotSpace};
    const marginSpace = {margin: dotSpace};

    let pageCount = this.props.pageCount;
    let itemWidth = dotSize + (dotSpace * 2);
    //let offset = (this.state.viewWidth - itemWidth * pageCount) / 2 + itemWidth * this.props.activePage;

    let offsetX = itemWidth * (activePage - scrollOffset);
    let left = scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [offsetX, offsetX + itemWidth]
    });

    
    let indicators = [];
    for (
    let i = 0; i < pageCount; i++) {
      indicators.push(this.renderIndicator(i, dotSizeStyle, borderRadiusStyle, marginSideSpace));
    }

    return (
      <View style={[styles.indicators, {bottom: bottomPosition}]}>
        <View style={styles.tabs}
          onLayout={(event) => {
              let viewWidth = event.nativeEvent.layout.width;
              if (!viewWidth || this.state.viewWidth === viewWidth) {
                return;
              }
              this.setState({
                viewWidth: viewWidth,
              });
            }}>
          {indicators}
          <Animated.View style={[styles.curDot, {left}, {backgroundColor: colorActive}, dotSizeStyle, borderRadiusStyle, marginSpace]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   tab: {
    alignItems: 'center',
  },
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dot: {
    backgroundColor: Colors.gray_light,
  },

  curDot: {
    position: 'absolute',
    bottom: 0,
  },
  indicators: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
});*/