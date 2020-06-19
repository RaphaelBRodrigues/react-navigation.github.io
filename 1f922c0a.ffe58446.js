/*! For license information please see 1f922c0a.ffe58446.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),i=(n(0),n(486)),o=n(488),l=n(489),c={id:"drawer-navigator",title:"createDrawerNavigator",sidebar_label:"createDrawerNavigator"},b={id:"version-5.x/drawer-navigator",title:"createDrawerNavigator",description:"Component that renders a navigation drawer which can be opened and closed via gestures.",source:"@site/versioned_docs/version-5.x/drawer-navigator.md",permalink:"/docs/drawer-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/drawer-navigator.md",version:"5.x",sidebar_label:"createDrawerNavigator",sidebar:"version-5.x/docs",previous:{title:"createNativeStackNavigator",permalink:"/docs/native-stack-navigator"},next:{title:"createBottomTabNavigator",permalink:"/docs/bottom-tab-navigator"}},s=[{value:"API Definition",id:"api-definition",children:[{value:"Props",id:"props",children:[]},{value:"Options",id:"options",children:[]},{value:"Events",id:"events",children:[]},{value:"Helpers",id:"helpers",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Checking if the drawer is open",id:"checking-if-the-drawer-is-open",children:[]},{value:"Nesting drawer navigators inside others",id:"nesting-drawer-navigators-inside-others",children:[]}],p={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Component that renders a navigation drawer which can be opened and closed via gestures."),Object(i.b)("div",{style:{display:"flex",margin:"16px 0"}},Object(i.b)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0},Object(i.b)("source",{src:"/assets/navigators/drawer/drawer.mov"}))),Object(i.b)("p",null,"To use this navigator, ensure that you have ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started"}),Object(i.b)("inlineCode",{parentName:"a"},"@react-navigation/native")," and its dependencies (follow this guide)"),", then install ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/tree/main/packages/drawer"}),Object(i.b)("inlineCode",{parentName:"a"},"@react-navigation/drawer")),":"),Object(i.b)(o.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install @react-navigation/drawer\n"))),Object(i.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @react-navigation/drawer\n")))),Object(i.b)("h2",{id:"api-definition"},"API Definition"),Object(i.b)("p",null,"To use this drawer navigator, import it from ",Object(i.b)("inlineCode",{parentName:"p"},"@react-navigation/drawer"),":"),Object(i.b)("samp",{id:"simple-drawer"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { createDrawerNavigator } from \'@react-navigation/drawer\';\n\nconst Drawer = createDrawerNavigator();\n\nfunction MyDrawer() {\n  return (\n    <Drawer.Navigator>\n      <Drawer.Screen name="Feed" component={Feed} />\n      <Drawer.Screen name="Article" component={Article} />\n    </Drawer.Navigator>\n  );\n}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"For a complete usage guide please visit ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/drawer-based-navigation"}),"Drawer Navigation"),".")),Object(i.b)("h3",{id:"props"},"Props"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Drawer.Navigator")," component accepts following props:"),Object(i.b)("h4",{id:"initialroutename"},Object(i.b)("inlineCode",{parentName:"h4"},"initialRouteName")),Object(i.b)("p",null,"The name of the route to render on first load of the navigator."),Object(i.b)("h4",{id:"screenoptions"},Object(i.b)("inlineCode",{parentName:"h4"},"screenOptions")),Object(i.b)("p",null,"Default options to use for the screens in the navigator."),Object(i.b)("h4",{id:"backbehavior"},Object(i.b)("inlineCode",{parentName:"h4"},"backBehavior")),Object(i.b)("p",null,"Behavior of back button handling."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"initialRoute")," to return to initial tab"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"order")," to return to previous tab (in the order they are shown in the tab bar)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"history")," to return to last visited tab"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"none")," to not handle back button")),Object(i.b)("h4",{id:"openbydefault"},Object(i.b)("inlineCode",{parentName:"h4"},"openByDefault")),Object(i.b)("p",null,"Whether the drawer should stay open by default. When this is ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", the drawer will be open from the initial render. It can be closed normally using gestures or programmatically. However, when going back, drawer will re-open if it was closed. This essentially reverses the behavior of the drawer where the closed state is the default state."),Object(i.b)("h4",{id:"drawerposition"},Object(i.b)("inlineCode",{parentName:"h4"},"drawerPosition")),Object(i.b)("p",null,"Options are ",Object(i.b)("inlineCode",{parentName:"p"},"left")," or ",Object(i.b)("inlineCode",{parentName:"p"},"right"),". Default is ",Object(i.b)("inlineCode",{parentName:"p"},"left")," position."),Object(i.b)("h4",{id:"drawertype"},Object(i.b)("inlineCode",{parentName:"h4"},"drawerType")),Object(i.b)("p",null,"Type of the drawer. It determines how the drawer looks and animates."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"front"),": Traditional drawer which covers the screen with a overlay behind it."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"back"),": The drawer is revealed behind the screen on swipe."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"slide"),": Both the screen and the drawer slide on swipe to reveal the drawer."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"permanent"),": A permanent drawer is shown as a sidebar. Useful for having always visible drawer on larger screens.")),Object(i.b)("p",null,"You can conditionally specify the ",Object(i.b)("inlineCode",{parentName:"p"},"drawerType")," to show a permanent drawer on bigger screens and a traditional drawer drawer on small screens:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { useWindowDimensions } from 'react-native';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\n\nconst Drawer = createDrawerNavigator();\n\nfunction MyDrawer() {\n  const dimensions = useWindowDimensions();\n\n  return (\n    <Drawer.Navigator\n      drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}\n    >\n      {/* Screens */}\n    </Drawer.Navigator>\n  );\n}\n")),Object(i.b)("p",null,"You can also specify other props such as ",Object(i.b)("inlineCode",{parentName:"p"},"drawerStyle")," based on screen size to customize the behavior. For example, you can combine it with ",Object(i.b)("inlineCode",{parentName:"p"},"openByDefault")," to achieve a master-detail layout:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { useWindowDimensions } from 'react-native';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\n\nconst Drawer = createDrawerNavigator();\n\nfunction MyDrawer() {\n  const dimensions = useWindowDimensions();\n\n  const isLargeScreen = dimensions.width >= 768;\n\n  return (\n    <Drawer.Navigator\n      openByDefault\n      drawerType={isLargeScreen ? 'permanent' : 'back'}\n      drawerStyle={isLargeScreen ? null : { width: '100%' }}\n      overlayColor=\"transparent\"\n    >\n      {/* Screens */}\n    </Drawer.Navigator>\n  );\n}\n")),Object(i.b)("h4",{id:"edgewidth"},Object(i.b)("inlineCode",{parentName:"h4"},"edgeWidth")),Object(i.b)("p",null,"Allows for defining how far from the edge of the content view the swipe gesture should activate."),Object(i.b)("p",null,"This is not supported on Web."),Object(i.b)("h4",{id:"hidestatusbar"},Object(i.b)("inlineCode",{parentName:"h4"},"hideStatusBar")),Object(i.b)("p",null,'When set to true Drawer component will hide the OS status bar whenever the drawer is pulled or when it\'s in an "open" state.'),Object(i.b)("h4",{id:"statusbaranimation"},Object(i.b)("inlineCode",{parentName:"h4"},"statusBarAnimation")),Object(i.b)("p",null,"Animation of the statusbar when hiding it. use in combination with ",Object(i.b)("inlineCode",{parentName:"p"},"hideStatusBar"),"."),Object(i.b)("h4",{id:"keyboarddismissmode"},Object(i.b)("inlineCode",{parentName:"h4"},"keyboardDismissMode")),Object(i.b)("p",null,"Whether the keyboard should be dismissed when the swipe gesture begins. Defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"'on-drag'"),". Set to ",Object(i.b)("inlineCode",{parentName:"p"},"'none'")," to disable keyboard handling."),Object(i.b)("h4",{id:"minswipedistance"},Object(i.b)("inlineCode",{parentName:"h4"},"minSwipeDistance")),Object(i.b)("p",null,"Minimum swipe distance threshold that should activate opening the drawer."),Object(i.b)("h4",{id:"overlaycolor"},Object(i.b)("inlineCode",{parentName:"h4"},"overlayColor")),Object(i.b)("p",null,"Color overlay to be displayed on top of the content view when drawer gets open. The opacity is animated from ",Object(i.b)("inlineCode",{parentName:"p"},"0")," to ",Object(i.b)("inlineCode",{parentName:"p"},"1")," when the drawer opens."),Object(i.b)("h4",{id:"gesturehandlerprops"},Object(i.b)("inlineCode",{parentName:"h4"},"gestureHandlerProps")),Object(i.b)("p",null,"Props to pass to the underlying pan gesture handler."),Object(i.b)("p",null,"This is not supported on Web."),Object(i.b)("h4",{id:"lazy"},Object(i.b)("inlineCode",{parentName:"h4"},"lazy")),Object(i.b)("p",null,"Whether the screens should render the first time they are accessed. Defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),". Set it to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," if you want to render all screens on initial render."),Object(i.b)("h4",{id:"scenecontainerstyle"},Object(i.b)("inlineCode",{parentName:"h4"},"sceneContainerStyle")),Object(i.b)("p",null,"Style object for the component wrapping the screen content."),Object(i.b)("h4",{id:"drawerstyle"},Object(i.b)("inlineCode",{parentName:"h4"},"drawerStyle")),Object(i.b)("p",null,"Style object for the drawer component. You can pass a custom background color for a drawer or a custom width here."),Object(i.b)("samp",{id:"drawer-with-style"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<Drawer.Navigator\n  drawerStyle={{\n    backgroundColor: '#c6cbef',\n    width: 240,\n  }}\n>\n  {/* screens */}\n</Drawer.Navigator>\n")),Object(i.b)("h4",{id:"drawercontent"},Object(i.b)("inlineCode",{parentName:"h4"},"drawerContent")),Object(i.b)("p",null,"Function that returns React element to render as the content of the drawer, for example, navigation items"),Object(i.b)("p",null,"The content component receives following props by default:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"state")," - The navigation state of the navigator, ",Object(i.b)("inlineCode",{parentName:"li"},"state.routes")," contains list of all routes"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"navigation")," - The navigation object for the navigator."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"descriptors")," - An descriptor object containing options for the drawer screens. The options can be accessed at ",Object(i.b)("inlineCode",{parentName:"li"},"descriptors[route.key].options"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"progress")," - Reanimated Node that represents the animated position of the drawer (0 is closed; 1 is open).")),Object(i.b)("h5",{id:"providing-a-custom-drawercontent"},"Providing a custom ",Object(i.b)("inlineCode",{parentName:"h5"},"drawerContent")),Object(i.b)("p",null,"The default component for the drawer is scrollable and only contains links for the routes in the RouteConfig. You can easily override the default component to add a header, footer, or other content to the drawer. The default content component is exported as ",Object(i.b)("inlineCode",{parentName:"p"},"DrawerContent"),". It renders a ",Object(i.b)("inlineCode",{parentName:"p"},"DrawerItemList")," component inside a ",Object(i.b)("inlineCode",{parentName:"p"},"ScrollView"),"."),Object(i.b)("p",null,"By default the drawer is scrollable and supports devices with notches. If you customize the content, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"DrawerContentScrollView")," to handle this automatically:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import {\n  DrawerContentScrollView,\n  DrawerItemList,\n} from '@react-navigation/drawer';\n\nfunction CustomDrawerContent(props) {\n  return (\n    <DrawerContentScrollView {...props}>\n      <DrawerItemList {...props} />\n    </DrawerContentScrollView>\n  );\n}\n")),Object(i.b)("p",null,"To add additional items in the drawer, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"DrawerItem")," component:"),Object(i.b)("samp",{id:"custom-drawer-content"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function CustomDrawerContent(props) {\n  return (\n    <DrawerContentScrollView {...props}>\n      <DrawerItemList {...props} />\n      <DrawerItem\n        label=\"Help\"\n        onPress={() => Linking.openURL('https://mywebsite.com/help')}\n      />\n    </DrawerContentScrollView>\n  );\n}\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"DrawerItem")," component accepts the following props:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"label")," (required): The label text of the item. Can be string, or a function returning a react element. e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"({ focused, color }) => <Text style={{ color }}>{focused ? 'Focused text' : 'Unfocused text'}</Text>"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"icon"),": Icon to display for the item. Accepts a function returning a react element. e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"({ focused, color, size }) => <Icon color={color} size={size} name={focused ? 'heart' : 'heart-outline'} />"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"focused"),": Boolean indicating whether to highlight the drawer item as active."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onPress")," (required): Function to execute on press."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"activeTintColor"),": Color for the icon and label when the item is active."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"inactiveTintColor"),": Color for the icon and label when the item is inactive."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"activeBackgroundColor"),": Background color for item when it's active."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"inactiveBackgroundColor"),": Background color for item when it's inactive."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"labelStyle"),": Style object for the label ",Object(i.b)("inlineCode",{parentName:"li"},"Text"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"style"),": Style object for the wrapper ",Object(i.b)("inlineCode",{parentName:"li"},"View"),".")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"progress")," node can be used to do interesting animations in your ",Object(i.b)("inlineCode",{parentName:"p"},"drawerContent"),", such as parallax motion of the drawer contents:"),Object(i.b)("samp",{id:"animated-drawer-content"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function CustomDrawerContent({ progress, ...rest }) {\n  const translateX = Animated.interpolate(progress, {\n    inputRange: [0, 1],\n    outputRange: [-100, 0],\n  });\n\n  return (\n    <Animated.View style={{ transform: [{ translateX }] }}>\n      {/* ... drawer contents */}\n    </Animated.View>\n  );\n}\n")),Object(i.b)("p",null,"To use the custom component, we need to pass it in the ",Object(i.b)("inlineCode",{parentName:"p"},"drawerContent")," prop:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>\n  {/* screens */}\n</Drawer.Navigator>\n")),Object(i.b)("h4",{id:"drawercontentoptions"},Object(i.b)("inlineCode",{parentName:"h4"},"drawerContentOptions")),Object(i.b)("p",null,"An object containing the props for the drawer content component. See below for more details."),Object(i.b)("h5",{id:"activetintcolor"},Object(i.b)("inlineCode",{parentName:"h5"},"activeTintColor")),Object(i.b)("p",null,"Color for the icon and label in the active item in the drawer."),Object(i.b)("h5",{id:"activebackgroundcolor"},Object(i.b)("inlineCode",{parentName:"h5"},"activeBackgroundColor")),Object(i.b)("p",null,"Background color for the active item in the drawer."),Object(i.b)("h5",{id:"inactivetintcolor"},Object(i.b)("inlineCode",{parentName:"h5"},"inactiveTintColor")),Object(i.b)("p",null,"Color for the icon and label in the inactive items in the drawer."),Object(i.b)("h5",{id:"inactivebackgroundcolor"},Object(i.b)("inlineCode",{parentName:"h5"},"inactiveBackgroundColor")),Object(i.b)("p",null,"Background color for the inactive items in the drawer."),Object(i.b)("h5",{id:"itemstyle"},Object(i.b)("inlineCode",{parentName:"h5"},"itemStyle")),Object(i.b)("p",null,"Style object for the single item, which can contain an icon and/or a label."),Object(i.b)("h5",{id:"labelstyle"},Object(i.b)("inlineCode",{parentName:"h5"},"labelStyle")),Object(i.b)("p",null,"Style object to apply to the ",Object(i.b)("inlineCode",{parentName:"p"},"Text")," style inside content section which renders a label."),Object(i.b)("h5",{id:"contentcontainerstyle"},Object(i.b)("inlineCode",{parentName:"h5"},"contentContainerStyle")),Object(i.b)("p",null,"Style object for the content section inside the ",Object(i.b)("inlineCode",{parentName:"p"},"ScrollView"),"."),Object(i.b)("h5",{id:"style"},Object(i.b)("inlineCode",{parentName:"h5"},"style")),Object(i.b)("p",null,"Style object for the wrapper view."),Object(i.b)("p",null,"Example:"),Object(i.b)("samp",{id:"drawer-content-options"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<Drawer.Navigator\n  drawerContentOptions={{\n    activeTintColor: '#e91e63',\n    itemStyle: { marginVertical: 30 },\n  }}\n>\n  {/* screens */}\n</Drawer.Navigator>\n")),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("p",null,"The following ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/screen-options"}),"options")," can be used to configure the screens in the navigator:"),Object(i.b)("h4",{id:"title"},Object(i.b)("inlineCode",{parentName:"h4"},"title")),Object(i.b)("p",null,"Generic title that can be used as a fallback for ",Object(i.b)("inlineCode",{parentName:"p"},"headerTitle")," and ",Object(i.b)("inlineCode",{parentName:"p"},"drawerLabel")),Object(i.b)("h4",{id:"drawerlabel"},Object(i.b)("inlineCode",{parentName:"h4"},"drawerLabel")),Object(i.b)("p",null,"String or a function that given ",Object(i.b)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string }")," returns a React.Node, to display in drawer sidebar. When undefined, scene ",Object(i.b)("inlineCode",{parentName:"p"},"title")," is used"),Object(i.b)("h4",{id:"drawericon"},Object(i.b)("inlineCode",{parentName:"h4"},"drawerIcon")),Object(i.b)("p",null,"Function, that given ",Object(i.b)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string, size: number }")," returns a React.Node, to display in drawer sidebar"),Object(i.b)("h4",{id:"swipeenabled"},Object(i.b)("inlineCode",{parentName:"h4"},"swipeEnabled")),Object(i.b)("p",null,"Whether you can use swipe gestures to open or close the drawer. Defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("p",null,"Swipe gesture is not supported on Web."),Object(i.b)("h4",{id:"gestureenabled"},Object(i.b)("inlineCode",{parentName:"h4"},"gestureEnabled")),Object(i.b)("p",null,"Whether you can use gestures to open or close the drawer. Setting this to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," disables swipe gestures as well as tap on overlay to close. See ",Object(i.b)("inlineCode",{parentName:"p"},"swipeEnabled")," to disable only the swipe gesture."),Object(i.b)("h4",{id:"unmountonblur"},Object(i.b)("inlineCode",{parentName:"h4"},"unmountOnBlur")),Object(i.b)("p",null,"Whether this screen should be unmounted when navigating away from it. Unmounting a screen resets any local state in the screen as well as state of nested navigators in the screen. Defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("h3",{id:"events"},"Events"),Object(i.b)("p",null,"The navigator can ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/navigation-events"}),"emit events")," on certain actions. Supported events are:"),Object(i.b)("h4",{id:"draweropen"},Object(i.b)("inlineCode",{parentName:"h4"},"drawerOpen")),Object(i.b)("p",null,"This event is fired when the drawer opens."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('drawerOpen', (e) => {\n    // Do something\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),Object(i.b)("h4",{id:"drawerclose"},Object(i.b)("inlineCode",{parentName:"h4"},"drawerClose")),Object(i.b)("p",null,"This event is fired when the drawer closes."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('drawerClose', (e) => {\n    // Do something\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),Object(i.b)("h3",{id:"helpers"},"Helpers"),Object(i.b)("p",null,"The drawer navigator adds the following methods to the navigation prop:"),Object(i.b)("h4",{id:"opendrawer"},Object(i.b)("inlineCode",{parentName:"h4"},"openDrawer")),Object(i.b)("p",null,"Opens the drawer pane."),Object(i.b)("samp",{id:"drawer-open-close-toggle"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"navigation.openDrawer();\n")),Object(i.b)("h4",{id:"closedrawer"},Object(i.b)("inlineCode",{parentName:"h4"},"closeDrawer")),Object(i.b)("p",null,"Closes the drawer pane."),Object(i.b)("samp",{id:"drawer-open-close-toggle"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"navigation.closeDrawer();\n")),Object(i.b)("h4",{id:"toggledrawer"},Object(i.b)("inlineCode",{parentName:"h4"},"toggleDrawer")),Object(i.b)("p",null,"Opens the drawer pane if closed, closes the drawer pane if opened."),Object(i.b)("samp",{id:"drawer-open-close-toggle"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"navigation.toggleDrawer();\n")),Object(i.b)("h4",{id:"jumpto"},Object(i.b)("inlineCode",{parentName:"h4"},"jumpTo")),Object(i.b)("p",null,"Navigates to an existing screen in the drawer navigator. The method accepts following arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name")," - ",Object(i.b)("em",{parentName:"li"},"string")," - Name of the route to jump to."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"params")," - ",Object(i.b)("em",{parentName:"li"},"object")," - Screen params to merge into the destination route (found in the pushed screen through ",Object(i.b)("inlineCode",{parentName:"li"},"route.params"),").")),Object(i.b)("samp",{id:"drawer-example"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"navigation.jumpTo('Profile', { owner: 'Satya' });\n")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("samp",{id:"drawer-example"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createDrawerNavigator } from '@react-navigation/drawer';\n\nconst Drawer = createDrawerNavigator();\n\nfunction MyDrawer() {\n  return (\n    <Drawer.Navigator initialRouteName=\"Feed\">\n      <Drawer.Screen\n        name=\"Feed\"\n        component={Feed}\n        options={{ drawerLabel: 'Home' }}\n      />\n      <Drawer.Screen\n        name=\"Notifications\"\n        component={Notifications}\n        options={{ drawerLabel: 'Updates' }}\n      />\n      <Drawer.Screen\n        name=\"Profile\"\n        component={Profile}\n        options={{ drawerLabel: 'Profile' }}\n      />\n    </Drawer.Navigator>\n  );\n}\n")),Object(i.b)("h2",{id:"checking-if-the-drawer-is-open"},"Checking if the drawer is open"),Object(i.b)("p",null,"You can check if the drawer is open by using the ",Object(i.b)("inlineCode",{parentName:"p"},"useIsDrawerOpen")," hook."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { useIsDrawerOpen } from '@react-navigation/drawer';\n\n// ...\n\nconst isDrawerOpen = useIsDrawerOpen();\n")),Object(i.b)("h2",{id:"nesting-drawer-navigators-inside-others"},"Nesting drawer navigators inside others"),Object(i.b)("p",null,"If a drawer navigator is nested inside of another navigator that provides some UI, for example a tab navigator or stack navigator, then the drawer will be rendered below the UI from those navigators. The drawer will appear below the tab bar and below the header of the stack. You will need to make the drawer navigator the parent of any navigator where the drawer should be rendered on top of its UI."))}d.isMDXComponent=!0},486:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?r.a.createElement(m,l({ref:t},b,{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},487:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},488:function(e,t,n){"use strict";n(23),n(17),n(18);var a=n(0),r=n.n(a),i=n(487),o=n.n(i),l=n(120),c=n.n(l),b=37,s=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,l=e.values,p=Object(a.useState)(i),d=p[0],u=p[1],m=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},l.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===t,className:o()("tab-item",c.a.tabItem,{"tab-item--active":d===t}),key:t,ref:function(e){return m.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(m,e.target,e)},onFocus:function(){return u(t)},onClick:function(){return u(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===d}))[0]))}},489:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);