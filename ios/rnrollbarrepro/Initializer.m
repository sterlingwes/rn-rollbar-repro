#import <Foundation/Foundation.h>

#import "Initializer.h"

@implementation InitializerConfiguration

+ (InitializerConfiguration *)defaultConfiguration {
    return [InitializerConfiguration new];
}

@end

@implementation Initializer

- (void)performWithConfiguration:(InitializerConfiguration *)configuration {
}

- (BOOL)shouldPerformWhenApplicationEntersForeground {
    return NO;
}

@end
