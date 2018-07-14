import glamorous from 'glamorous-native';

export const PositionRight = glamorous.view({
    position: "absolute",
    right: 0,
    top: -10
});

export const TopbarContainer = glamorous.view({
  position: "relative",
  flexDirection: "row",
  alignSelf: "stretch",
  justifyContent: "center",
});

export const BottombarContainer = glamorous(TopbarContainer)({justifyContent: "space-between", marginTop: "auto"});
