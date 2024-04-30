import discord
from discord.ext import commands, tasks
import mysql.connector

intents = discord.Intents.default()
bot = commands.Bot(command_prefix='!', intents=intents)

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="passionrp"
)

async def update_presence():
    activity = discord.Activity(
        type=discord.ActivityType.playing,
        name="Passion RP FA",
        state="Staff"
    )
    await bot.change_presence(activity=activity)

@bot.event
async def on_ready():
    print(f'Connecté en tant que {bot.user}')
    await bot.change_presence(activity=discord.Game(name="Passion RP FA", type=discord.ActivityType.playing))
    check_updates.start()
    await update_presence()

@tasks.loop(minutes=0.2) 
async def check_updates():
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM mises_a_jour WHERE est_mise_a_jour = 0")
    new_updates = cursor.fetchall()
    print('MAJ SERVER')
    if new_updates:
        for update in new_updates:
            embed = discord.Embed(title=f"Message de {update[4]}", color=0xFFA500)
            embed.add_field(name=f"Sujet : {update[5]}", value=f"{update[1]}, \nEMAIL : {update[6]}", inline=False)
            channel = bot.get_channel(1121044057687330917)
            await channel.send(embed=embed)
            print(f'MESSAGE Sujet : {update[5]}, CONTENU : {update[1]}, DE {update[4]}, EMAIL : {update[6]}')
        cursor.execute("UPDATE mises_a_jour SET est_mise_a_jour = 1 WHERE est_mise_a_jour = 0")
    conn.commit()


@bot.event
async def on_disconnect():
    conn.close()

bot.run('') 
