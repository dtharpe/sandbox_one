//
//  RWTScaryBugData.h
//  Bugs_
//
//  Created by Darryl Tharpe on 4/28/14.
//  Copyright (c) 2014 com.yourname. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface RWTScaryBugData : NSObject

@property (strong) NSString *title;
@property (assign) float rating;

- (id)initWIthTitle:(NSString*)title rating:(float)rating;

@end
