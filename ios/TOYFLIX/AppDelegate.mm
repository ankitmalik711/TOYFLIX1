#import <GoogleMaps/GoogleMaps.h>
#import "AppDelegate.h"
#import <Firebase.h>
#import <React/RCTBundleURLProvider.h>

//#import <GoogleMaps/GoogleMaps.h>
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  
       [GMSServices provideAPIKey:@"AIzaSyBSmR_4NGj67Q7Mv0-MeSOcytuc2RuUMIc"];
       
  self.moduleName = @"TOYFLIX";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  // [FIRApp configure];
  self.initialProps = @{};
  if ([FIRApp defaultApp] == nil) {
    [FIRApp configure];
  }
//  [GMSServices provideAPIKey:@"YOUR_API_KEY"]; // add this line using the api key obtained from Google Console
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
