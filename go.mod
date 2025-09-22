module github.com/yuros-site/course

replace (
	github.com/almuhdilkarim/webdev-basic => /home/devel/project/personal/lecture/webdev-basic
	github.com/rozard-course/default 	  => /home/devel/project/rozard/course/default
	github.com/rozard-genset/micros 	  => /home/devel/project/rozard/system/corest
	github.com/rozard-genset/course 	  => /home/devel/project/rozard/system/course
)


go 1.25.1

require (
	github.com/almuhdilkarim/webdev-basic v0.0.0-20250921115319-6a79e02ed50e // indirect
	github.com/rozard-genset/corest v0.0.0-20250921232507-556937ba0a8d // indirect
	github.com/rozard-genset/course v0.0.0-20250922000105-b4ca842f57ce // indirect
	github.com/rozard-genset/micros v0.0.0-20250922005641-13708dd21cf2 // indirect
)
