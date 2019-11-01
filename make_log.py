import random

global active
active = 0

global inactive
inactive = 0


def active_day(days):
	global active
	active += 1
	for j in range(24):
		if j == 7 or j == 10 or j == 13 or j == 17:
			steps = random.randint(300,500)
			if days == 31:
				date.write(str(i + 1) + "/01/17, " + str(j) + ", " + str(steps + 1) + "\n")
			if days == 28:
				date.write(str(i + 1) + "/02/17, " + str(j) + ", " + str(steps + 1) + "\n")
		if j == 8 or j == 18:
			steps = random.randint(100,250)
			if days == 31:
				date.write(str(i + 1) + "/01/17, " + str(j) + ", " + str(steps + 1) + "\n")
			if days == 28:
				date.write(str(i + 1) + "/02/17, " + str(j) + ", " + str(steps + 1) + "\n")

		if j == 9 or j == 12  or j == 6 or j == 15 or j == 22 or j == 24:
			steps = random.randint(0,100)
			if days == 31:
				date.write(str(i + 1) + "/01/17, " + str(j) + ", " + str(steps + 1) + "\n")
			if days == 28:
				date.write(str(i + 1) + "/02/17, " + str(j) + ", " + str(steps + 1) + "\n")

		if j == 11:
			steps = random.randint(1000,2000)
			if days == 31:
				date.write(str(i + 1) + "/01/17, " + str(j) + ", " + str(steps + 1) + "\n")
			if days == 28:
				date.write(str(i + 1) + "/02/17, " + str(j) + ", " + str(steps + 1) + "\n")

		if j == 14 or j == 16:
			steps = random.randint(2000,3000)
			if days == 31:
				date.write(str(i + 1) + "/01/17, " + str(j) + ", " + str(steps + 1) + "\n")
			if days == 28:
				date.write(str(i + 1) + "/02/17, " + str(j) + ", " + str(steps + 1) + "\n")

		if j == 19 or j == 21 or j == 20:
			steps = random.randint(500, 1000)
			if days == 31:
				date.write(str(i + 1) + "/01/17, " + str(j) + ", " + str(steps + 1) + "\n")
			if days == 28:
				date.write(str(i + 1) + "/02/17, " + str(j) + ", " + str(steps + 1) + "\n")

		if j == 23 or j == 0 or j == 1 or j == 2 or j == 3 or j == 4 or j == 5:
			steps = 0
			if days == 31:
				date.write(str(i + 1) + "/01/17, " + str(j) + ", " + str(steps) + "\n")
			if days == 28:
				date.write(str(i + 1) + "/02/17, " + str(j) + ", " + str(steps) + "\n")
def inactive_day(days):
	global inactive
	inactive += 1
	for j in range(24):
		if j == 13:
			steps = random.randint(100,200)
			if days == 31:
				date.write(str(i + 1) + "/01/17, " + str(j) + ", " + str(steps + 1) + "\n")
			if days == 28:
				date.write(str(i + 1) + "/02/17, " + str(j) + ", " + str(steps + 1) + "\n")

		if j == 14 or j == 17:
			steps = random.randint(0,20)
			if days == 31:
				date.write(str(i + 1) + "/01/17, " + str(j) + ", " + str(steps + 1) + "\n")
			if days == 28:
				date.write(str(i + 1) + "/02/17, " + str(j) + ", " + str(steps + 1) + "\n")

		if j == 16:
			steps = random.randint(500,2000)
			if days == 31:
				date.write(str(i + 1) + "/01/17, " + str(j) + ", " + str(steps + 1) + "\n")
			if days == 28:
				date.write(str(i + 1) + "/02/17, " + str(j) + ", " + str(steps + 1) + "\n")

		if j == 15 or j == 21 or j == 20:
			steps = random.randint(0, 100)
			if days == 31:
				date.write(str(i + 1) + "/01/17, " + str(j) + ", " + str(steps + 1) + "\n")
			if days == 28:
				date.write(str(i + 1) + "/02/17, " + str(j) + ", " + str(steps + 1) + "\n")

		if j == 22 or j == 18 or j == 23 or j == 0 or j == 1 or j == 2 or j == 3 or j == 4 or j == 5 or j == 6:
			steps = 0
			if days == 31:
				date.write(str(i + 1) + "/01/17, " + str(j) + ", " + str(steps) + "\n")
			if days == 28:
				date.write(str(i + 1) + "/02/17, " + str(j) + ", " + str(steps) + "\n")

		if j ==7 or j == 8 or j == 9 or j == 10 or j == 11 or j == 12:
			steps = 0
			if days == 31:
				date.write(str(i + 1) + "/01/17, " + str(j) + ", " + str(steps) + "\n")
			if days == 28:
				date.write(str(i + 1) + "/02/17, " + str(j) + ", " + str(steps) + "\n")


date = open("date.csv", "a")


for i in range(31):
	a = random.choice([1, 2])
	if a == 1:
		active_day(31)
	else:
		inactive_day(31)

for i in range(28):
	a = random.choice([1, 2])
	if a == 1:
		active_day(28)
	else:
		inactive_day(28)

print("active = " + str(active))
print("inactive = " + str(inactive))

date.close()
